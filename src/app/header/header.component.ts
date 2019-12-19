import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
// import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  link: string = '';
  private clicked = false;
  public authorised = false;

  constructor(
    private renderer: Renderer2,
    //private dsService: DataStorageService,
    private authService: AuthService) {

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
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      ()=>{
        if(this.authService.getToken()){
          this.authorised = true;
        }
      }
    )
  }

}
