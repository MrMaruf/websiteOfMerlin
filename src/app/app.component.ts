import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { HistoryService } from './history/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'websiteOfMerlin';
  constructor(private historyService: HistoryService, private authService: AuthService, private router: Router){
    
  }
  ngOnInit(){
    if(!this.authService.getAuthState()['authorised'])
    {
      this.router.navigate(['/'])
    }
    this.historyService.getAllData();
    
  }
}
