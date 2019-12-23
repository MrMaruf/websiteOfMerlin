import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import { HistoryService } from '../history/history.service';
import { Chapter } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {
  chaptersObservable: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private historyService: HistoryService, 
    private authService: AuthService,
    private router: Router) {

  }

  getAllData() {
    this.chaptersObservable = this.getChapters('/');
    this.chaptersObservable.subscribe(response => {
      // assingning of chapters 
      const chapters: Chapter[] = response[0];

      // getting it to history
      this.historyService.setChapters(chapters);
    });
  }

  // saveAllData() {
  //   let token = this.authService.getToken();

  //   this.http.put('https://web2-mn.firebaseio.com/employees.json?auth=' + token, this.empService.getEmployees())
  //     .subscribe((response: Response) => console.log(response),
  //       (error: Error) => {
  //           this.router.navigate(['unauthorised-action'])
  //       });
  //   this.http.put('https://web2-mn.firebaseio.com/departments.json?auth=' + token, this.depService.getDepartments())
  //     .subscribe((response: Response) => console.log(response));
  //   this.http.put('https://web2-mn.firebaseio.com/tasks.json?auth=' + token, this.taskService.getTasks())
  //     .subscribe((response: Response) => this.router.navigate(['data-put-success']));
  // }

  getChapters(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
