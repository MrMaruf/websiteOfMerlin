import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) {
  }

  ngOnInit() {
  }

  onSignIn(form: any) {
    const email = form.value['email'];
    const password = form.value['password'];

    this.authService.signinUser(email, password)

  }
}
