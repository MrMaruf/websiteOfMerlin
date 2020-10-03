import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'websiteOfMerlin';
  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute){
    
  }
  ngOnInit(){
  }
}
