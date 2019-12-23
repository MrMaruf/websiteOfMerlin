import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Chapter } from '../models/chapter.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() chapters = this.historyService.getChapters();
  subscription: Subscription;
  filterParam: string = '';
  constructor( private historyService: HistoryService, private router: Router) { }

  ngOnInit() {
    if (this.chapters) {
      this.subscription = this.historyService.chaptersChanged.subscribe(
        (data: Chapter[]) => {
          this.chapters = data;
        });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
