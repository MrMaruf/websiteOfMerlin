import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  chaptersChanged = new Subject<Chapter[]>();


  private chapters: Chapter[] = [];

  setChapters(newChapters: Chapter[]) {
    for (const chapter of newChapters) {
      if (!chapter.skills) {
        chapter.skills = [];
      }
      if (!chapter.abilities) {
        chapter.abilities = [];
      }
    }
    this.chapters = newChapters.slice();
    this.chaptersChanged.next(this.chapters.slice());
  }

  getChapters() {
    return this.chapters;
  }

  getChapter(index: number) {
    return this.chapters[index];
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
    if (!chapter.skills) {
      chapter.skills = [];
    }
    if (!chapter.abilities) {
      chapter.abilities = [];
    }
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
