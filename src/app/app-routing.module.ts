import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Sub-components imports start
*/
import { MessagePageComponent } from './message-page/message-page.component'
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { ChapterComponent } from './history/chapter/chapter.component';
import { ChapterResolver } from './history/chapter/chapter-resolver.service';

/*
Sub-components imports end
*/

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: MessagePageComponent,
    data: { message: 'Welcome to WEB2 Website Application! It is just a seed, so please no worries. Content will appear later on!' }
  },
  { path: 'information', redirectTo: '' },
  { path: 'about', component: AboutComponent },
  {
    path: 'history', component: HistoryComponent, children: [
      { path: '', component: MessagePageComponent },
      

    ]
  },
  { path: 'chapter/:index', component: ChapterComponent, resolve: {chapters: ChapterResolver}},
  { path: 'chapter/ability/:index', component: ChapterComponent, resolve: {chapters: ChapterResolver}},
  { path: 'skill/:index', component: ChapterComponent, resolve: {chapters: ChapterResolver}},
  { path: 'spells/:index', component: ChapterComponent, resolve: {chapters: ChapterResolver}},
  { path: 'chapter/saves', component: ChapterComponent, resolve: {chapters: ChapterResolver}},
  // {
  //   path: 'register', component: SignUpComponent, children: [
  //     {path: 'weak-password', component: MessagePageComponent, data: {message: 'Password should be at least 6 characters'}},
  //   ]
  // },
  {
    path: 'login', component: SignInComponent, children: [
      {
        path: 'wrong-password',
        component: MessagePageComponent,
        data: { message: 'The password is invalid or the user does not have a password.' }
      },
    ]
  },
  { path: 'register-success', component: MessagePageComponent, data: { message: 'Process of registration was successful!' } },
  { path: 'login-success', component: MessagePageComponent, data: { message: 'You have successfully logged in!' } },
  { path: 'unauthorised-action', component: MessagePageComponent, data: { message: 'You are not authorised to do this action' } },
  { path: 'data-put-success', component: MessagePageComponent, data: { message: 'Data was successfully saved' } },
  { path: 'not-found', component: MessagePageComponent, data: { message: 'Page not found' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
