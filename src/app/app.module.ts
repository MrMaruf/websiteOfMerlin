import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*
firebase imports
*/
import { FirebaseService } from './shared/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
//environment import
import { environment } from '../environments/environment.firebase'
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
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterComponent } from './character/character.component';
import { FormCleanNamePipe } from './shared/form-clean-name.pipe';
import { KeycloakService } from './auth/keycloak.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { SecuredHttpInterceptor } from './intereceptor/secured-http.service';
import { AuthorComponent } from './author/author.component';
// was commented
import { SearchPipe } from './shared/search.pipe';
/*
Sub-components imports end
*/


@NgModule({
  declarations: [
    AppComponent,
    MessagePageComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    FormCleanNamePipe,
    AuthorComponent,
    // was commented
    SearchPipe,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    FirebaseService,
    KeycloakService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecuredHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
