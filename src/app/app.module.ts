import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
// import { HistoryComponent } from './history/history.component';
// import { SearchPipe } from './shared/search.pipe';
// import { HistoryService } from './history/history.service';
// import { ChapterComponent } from './history/chapter/chapter.component';
// import { SkillComponent } from './history/chapter/skill/skill.component';
// import { AbilityComponent } from './history/chapter/ability/ability.component';
// import { SavesComponent } from './history/chapter/saves/saves.component';
// import { SkillsComponent } from './history/chapter/skills/skills.component';
// import { SpellComponent } from './history/chapter/spell/spell.component';
// import { UneditedComponent } from './unedited/unedited.component';
// import { CreateUneditedComponent } from './create-unedited/create-unedited.component';
import { CharacterComponent } from './character/character.component';
import { FormCleanNamePipe } from './shared/form-clean-name.pipe';

/*
Sub-components imports end
*/


@NgModule({
  declarations: [
    AppComponent,
    // SearchPipe,
    MessagePageComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    HeaderComponent,
    // HistoryComponent,
    // ChapterComponent,
    // SkillComponent,
    // AbilityComponent,
    // SavesComponent,
    // SpellComponent,
    FooterComponent,
    // SkillsComponent,
    // UneditedComponent,
    // CreateUneditedComponent,
    CharacterComponent,
    FormCleanNamePipe,

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
    // HistoryService,
    
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
