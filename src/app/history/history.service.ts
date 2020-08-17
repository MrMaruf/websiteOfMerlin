import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter.model';
import { Subject, Observable } from 'rxjs';
import { FirebaseService } from '../shared/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private firebaseService: FirebaseService) { }

  chaptersChanged = new Subject<Chapter[]>();


  private chapters: Chapter[] = [];
  getAllData() {
    this.firebaseService.getChapters('chapters').subscribe(response => {

      // assingning of chapters 
      const chapters: Chapter[] = response;

      // getting it to history
      this.setChapters(chapters);
      // this.length = chapters.length;
    });
  }
  saveAllData() {
    // let token = this..getToken();
  }
  setChapters(newChapters: Chapter[]) {
    // for (const chapter of newChapters) {
    //   if (!chapter.skills) {
    //     chapter.skills = [];
    //   }
    //   if (!chapter.abilities) {
    //     chapter.abilities = [];
    //   }
    //   if (!chapter.spells) {
    //     chapter.spells = [];
    //   }
    // }
    this.chapters = newChapters.slice();
    this.chaptersChanged.next(this.chapters.slice());
  }

  getChapters() {
    return this.chapters;
  }

  async getChapter(index: number) {
    
    if (this.chapters.length > 0) {
      if (this.chapters[index]) {
        return this.chapters[index];
      }
    }
    else{
      const chapter = await <Promise<Chapter>>this.requestChapter(index);
      return chapter;
    }
  }
  requestChapter(index: number) {
    return this.firebaseService.getItemAt('/chapters/' + index);
  }

  // getChapterById(id: number) {
  //   for (let i = 0; i < this.chapter.length; i++) {
  //     if (this.chapter[i].id === id) {
  //       return this.getChapter(i);
  //     }
  //   }
  // }

  // getChapterByName(name: string) {
  //   for (let i = 0; i < this.chapter.length; i++) {
  //     if (this.chapter[i].name === name) {
  //       return this.getChapter(i);
  //     }
  //   }
  // }

  addChapter(chapter: Chapter) {
    // if (!chapter.skills) {
    //   chapter.skills = [];
    // }
    // if (!chapter.abilities) {
    //   chapter.abilities = [];
    // }
    this.chapters.push(chapter);
    this.chaptersChanged.next(this.chapters.slice());
  }

  updateChapter(index: number, chapter: Chapter) {
    this.chapters[index] = chapter;
    this.chaptersChanged.next(this.chapters.slice());
  }

  deleteChapter(index: number) {
    this.chapters.splice(index, 1);
    this.chaptersChanged.next(this.chapters.slice());
  }
  chaptersStatus(): boolean {
    return this.chapters.length > 0 ? true : false;
  }
  // updateChapterById(id: number, newChapter: Chapter) {
  //   for (let i = 0; i < this.chapter.length; i++) {
  //     if (this.chapter[i].id === id) {
  //       this.updateChapter(i, newChapter);
  //     }
  //   }
  // }

  // deleteChapterById(id: number) {
  //   for (let i = 0; i < this.chapter.length; i++) {
  //     if (this.chapter[i].id === id) {
  //       this.deleteChapter(i);
  //     }
  //   }
  // }
}
