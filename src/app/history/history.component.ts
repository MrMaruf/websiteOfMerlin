import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Chapter } from '../models/chapter.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() chapters = this.historyService.getChapters();
  subscription: Subscription;
  filterParam: string = '';
  isAuthor:boolean;

  constructor( private historyService: HistoryService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.chapters) {
      this.subscription = this.historyService.chaptersChanged.subscribe(
        (data: Chapter[]) => {
          this.chapters = data;
        });
    }
    this.isAuthor = this.authService.getAuthState()['isAuthor'];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
