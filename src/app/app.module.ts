import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
firebase imports
*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
//environment import
import { environment as envFirebase } from '../environments/environment.firebase'
/*
firebase imports end
*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*
Sub-components imports start
*/
import { MessagePageComponent } from './message-page/message-page.component'
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

/*
Sub-components imports end
*/

@NgModule({
  declarations: [
    AppComponent,
    MessagePageComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(envFirebase.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
