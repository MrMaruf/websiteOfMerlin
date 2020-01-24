import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { Chapter } from '../models/chapter.model';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  chaptersObservablesRef: AngularFireObject<any>;
  chaptersObservable: Observable<any[]>;
  private length: number;
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private authService: AuthService,
    private router: Router) {

  }

  


  getChapters(listPath): Observable<any[]> {
    this.chaptersObservablesRef = this.db.object(listPath);
    return this.chaptersObservablesRef.valueChanges();
  }
  async getItemAt(listPath) {
    return this.db.object(listPath).valueChanges().pipe(first()).toPromise();
  }
  updateChapters(chapters) {
    this.chaptersObservablesRef.update(chapters);
  }
  updateItemAt(listPath, updatable) {
    this.db.object(listPath).update(updatable);
  }
  saveChapters(chapters) {
    this.chaptersObservablesRef.set(chapters);
  }
  saveItemAt(listPath, updatable) {
    this.db.object(listPath).set(updatable);
  }
  deleteChapters() {
    this.chaptersObservablesRef.remove();
  }
  deleteItemAt(listPath) {
    this.db.object(listPath).remove();
  }
}
