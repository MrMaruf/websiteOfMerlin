import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment.firebase';

firebase.initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() loggedIn = new EventEmitter;

  private token: string = '';
  private authorised = false;
  private isAuthor = false;

  constructor(private router: Router) {

  }


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
            this.isAuthor = true;
            this.authorised = true;
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
    this.authorised = false;
    this.isAuthor = false;
    return firebase.auth().signOut().then(
      response => this.token = ''
    );
  }

  getAuthState() {
    return {'authorised': this.authorised, 'isAuthor': this.isAuthor};
  }
}