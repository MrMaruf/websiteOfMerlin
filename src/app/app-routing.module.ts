import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Sub-components imports start
*/
import { MessagePageComponent } from './message-page/message-page.component'
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

/*
Sub-components imports end
*/

const routes: Routes = [
  {
    path: '',
    component: MessagePageComponent,
    data: {message: 'Welcome to WEB2 Website Application! It is just a seed, so please no worries. Content will appear later on!'}
  },
  {path: 'information', redirectTo: ''},
  {path: 'about', component: AboutComponent},
  {path: 'register-success', component: MessagePageComponent, data: {message: 'Process of registration was successful!'}},
  {path: 'login-success', component: MessagePageComponent, data: {message: 'You have successfully logged in!'}},
  {path: 'unauthorised-action', component: MessagePageComponent, data: {message: 'You are not authorised to do this action'}},
  {path: 'data-put-success', component: MessagePageComponent, data: {message: 'Data was successfully saved'}},
  {path: 'not-found', component: MessagePageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
