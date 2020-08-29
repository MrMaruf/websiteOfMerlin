import { Component, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
// import {DataStorageService} from '../shared/data-storage.service';
import { AuthService } from "../auth/auth.service";
import { FirebaseService } from '../shared/firebase.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HistoryService } from '../history/history.service';
import { Subscription } from 'rxjs';
import { KeycloakService } from '../auth/keycloak.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  link: string = '';
  private clicked = false;
  public authorised = false;
  public author = false;
  activeClass = "active";
  currentRoute;
  progressIndex = 43;
  private subscription: Subscription;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private historyService: HistoryService,
    private router:Router) {
      router.events.pipe(
        filter(event => event instanceof NavigationEnd)  
      ).subscribe((event: NavigationEnd) => {
        this.currentRoute= router.url;
      });
  }

  getKeycloakService(){
    return KeycloakService;
  }
  onFetchData() {
    this.historyService.getAllData();
  }

  onSaveData() {
    this.historyService.saveAllData();
  }

  onLogout() {
    this.authService.logout().then(
      response => this.authorised = false
    );
  }

  onRefreshToken() {
    this.authService.refreshToken();
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      () => {
        if (this.authService.getToken()) {
          this.authorised = true;
          this.author = this.authService.getAuthState[1];
        }
      }
    );
    this.subscription = this.historyService.chaptersChanged.subscribe(
      (data) => {
        this.progressIndex = data.length-1;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
