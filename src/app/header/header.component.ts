import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
// import {DataStorageService} from '../shared/data-storage.service';
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from '../shared/data-storage.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  link: string = '';
  private clicked = false;
  public authorised = false;
  public author = false;
  activeClass = "active";
  currentRoute;
  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router) {
      router.events.pipe(
        filter(event => event instanceof NavigationEnd)  
      ).subscribe((event: NavigationEnd) => {
        this.currentRoute= router.url;
      });
  }

  // openDropdown() {
  //   if (!this.clicked) {
  //     this.renderer.addClass(this.elRef.nativeElement, 'show');
  //     this.clicked = true;
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'show');
  //     this.clicked = false;
  //   }
  // }

  // onFetchData() {
  //   this.dsService.getAllData();
  // }

  // onSaveData() {
  //   this.dsService.saveAllData();
  // }

  onLogout() {
    this.authService.logout().then(
      response => this.authorised = false
    );
  }

  onRefreshToken() {
    this.authService.refreshToken();
    console.log(this.router);
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      () => {
        if (this.authService.getToken()) {
          this.authorised = true;
          this.author = true;
        }
      }
    );
  }

}
