import {EventEmitter, Injectable, Output} from '@angular/core';
import {Router} from "@angular/router";

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() loggedIn = new EventEmitter;
  constructor(private router: Router) {

  }

  private token: string = '';

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['register-success']);
      })
      .catch(error => {
        this.router.navigate(['register', 'weak-password']);

      });
  }

  signinUser(email: string, password: string) {

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => {
            this.token = token;
            this.loggedIn.emit();
          }
        );
        this.router.navigate(['login-success']);
      })
      .catch(error => {
        this.router.navigate(['login', 'wrong-password']);
      });
  }

  getToken() {
    return this.token;
  }

  refreshToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    );
  }

  logout() {
    return firebase.auth().signOut().then(
      response => this.token = ''
    );
  }
}
