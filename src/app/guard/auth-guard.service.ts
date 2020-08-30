import { Injectable } from '@angular/core';
import { Route, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanLoad } from '@angular/router';
import { KeycloakService } from '../auth/keycloak.service';
import { PermissionGuard } from '../models/permission-guard.model';


@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

    constructor(public router: Router, private keycloakService: KeycloakService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        if (this.checkLogin(url)) {
            let permissionGuard = route.data["Permission"] as PermissionGuard;
            if (permissionGuard) {
                let checkMarkers = this.checkPermissionGuard(permissionGuard);
                if (this.checkAccess(checkMarkers, permissionGuard))
                    return true;
                else
                    this.router.navigate([permissionGuard.RedirectTo]);
            }
        }
        else return false;

    }

    /**
     * Checks if a user is logged in before activating the secured page.
     * @param url
     */
    checkLogin(url: string = ""): boolean {
        if (KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated) {
            return true;

        } else {
            KeycloakService.login();
            return false;
        }
    }

    /**
     * Checks if the logged in user have enough privilege to load the page. Group can be specified in the app-routing.module routes. 
     * Note that currently keycloak is not sending the list of roles that's why we are using groups.
     * @param route The route
     */
    canLoad(route: Route): boolean {
        // if (!(KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated)) {
        //     KeycloakService.login();
        //     return false;
        // }
        if (this.checkLogin()) {
            let data = route.data["Permission"] as PermissionGuard;
            console.log(data.Role);
            if (data.Role) {
                let hasDefined = KeycloakService.hasRole(data.Role)
                if (hasDefined)
                    return true;

                if (data.RedirectTo && data.RedirectTo !== undefined)
                    this.router.navigate([data.RedirectTo]);

                return false;

            } else {
                console.log('unrole');

                if (Array.isArray(data.Only) && Array.isArray(data.Except)) {
                    throw "Can't use both 'Only' and 'Except' in route data.";
                }

                if (Array.isArray(data.Only)) {
                    let hasDefined = KeycloakService.hasGroups(data.Only)
                    if (hasDefined)
                        return true;

                    if (data.RedirectTo && data.RedirectTo !== undefined)
                        this.router.navigate([data.RedirectTo]);

                    return false;
                }

                if (Array.isArray(data.Except)) {
                    let hasDefined = KeycloakService.hasGroups(data.Except)
                    if (!hasDefined)
                        return true;

                    if (data.RedirectTo && data.RedirectTo !== undefined)
                        this.router.navigate([data.RedirectTo]);

                    return false;
                }
            }
        } else return false
    }

    checkAccess(checkMarkers: string, permissionGuard: PermissionGuard): boolean {
        let role = permissionGuard.Role;
        let only = permissionGuard.Only;
        let except = permissionGuard.Except;
        let accessGranted: boolean;
        checkMarkers.split("+").forEach(value => {
            switch (value) {
                case "role":
                    accessGranted = KeycloakService.hasRole(role)
                    break;
                case "only":
                    accessGranted = KeycloakService.hasGroups(only);
                    break;
                case "except":
                    accessGranted = !KeycloakService.hasGroups(except);
                    break;
            };
            if (!accessGranted)
               return false;
        })

        return accessGranted;
    }

    checkPermissionGuard(permissionGuard: PermissionGuard): string {
        let role = permissionGuard.Role;
        let only = permissionGuard.Only;
        let except = permissionGuard.Except;
        if (!permissionGuard.RedirectTo)
            permissionGuard.RedirectTo = "403";
        if (only && except)
            throw "Can't use both 'Only' and 'Except' in route data.";
        if (role && only)
            return "role+only";
        else if (role && except)
            return "role+except";
        else if (only)
            return "only";
        else if (role)
            return "role";
        else if (except)
            return "except";
    }

}