import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Sub-components imports start
*/
import { AuthGuardService as AuthGuard } from './guard/auth-guard.service';
import { MessagePageComponent } from './message-page/message-page.component'
// import { SignInComponent } from './auth/sign-in/sign-in.component';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { PermissionGuard } from './models/permission-guard.model';
import { AuthorComponent } from './author/author.component';

/*
Sub-components imports end
*/
const homeMessage:string = 'Welcome to Merlin\'s Website Application!' + 
' It is just a beginning, so please no worries about emptiness. Content will appear later on!' + 
' If you have any ideas you want to propose or you noticed a bug of some sort, you can do that in the discord'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: MessagePageComponent,
    data: { message:  homeMessage }
  },
  { path: 'information', redirectTo: '' },
  { path: 'about', component: AboutComponent },
  {
      path: 'author', 
      canActivate: [AuthGuard],
      children: [
        { path: '', component: AuthorComponent },
        
      ],
      data : {
        Permission: {
          Role: "Author",
          // Only: ['Author'], okay, so for some reason groups don't work, will go back to roles
          RedirectTo: '403'
        } as PermissionGuard
      }
    },
  // {
  //   path: 'login', component: SignInComponent, children: [
  //     {
  //       path: 'wrong-password',
  //       component: MessagePageComponent,
  //       data: { message: 'The password is invalid or the user does not have a password.' }
  //     },
  //   ]
  // },
  { path: 'register-success', component: MessagePageComponent, data: { message: 'Process of registration was successful!' } },
  { path: 'login-success', component: MessagePageComponent, data: { message: 'You have successfully logged in!' } },
  { path: 'unauthorised-action', component: MessagePageComponent, data: { message: 'You are not authorised to do this action' } },
  { path: 'data-put-success', component: MessagePageComponent, data: { message: 'Data was successfully saved' } },
  { path: '403', component: MessagePageComponent, data: { message: 'You don\'t have access to this page' } },
  { path: '404', component: MessagePageComponent, data: { message: 'Page not found' } },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
