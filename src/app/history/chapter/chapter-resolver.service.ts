import { Injectable } from '@angular/core';
import { HistoryService } from '../history.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/models/chapter.model';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterResolver {

  constructor(private historyService: HistoryService, private firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Chapter>[] | Promise<Chapter>[] | Chapter[] {
    let passedIndex = +route.params['index'];
    const chapters = [null, null];

    this.historyService.getChapter(passedIndex).then(success => chapters[0] = <Chapter>success);
    chapters[1] = passedIndex > 0 ? this.historyService.getChapter(passedIndex - 1) : null;

    return chapters;

  }
}
