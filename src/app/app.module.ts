import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*
firebase imports
*/
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
import { HistoryComponent } from './history/history.component';
import { SearchPipe } from './shared/search.pipe';
import { HistoryService } from './history/history.service';
import { ChapterComponent } from './history/chapter/chapter.component';
import { ChapterResolver } from './history/chapter/chapter-resolver.service';
import { SkillComponent } from './history/skill/skill.component';
import { AbilityComponent } from './history/ability/ability.component';
import { SavesComponent } from './history/saves/saves.component';
import { SpellComponent } from './history/spell/spell.component';

/*
Sub-components imports end
*/


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    MessagePageComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    HeaderComponent,
    HistoryComponent,
    ChapterComponent,
    SkillComponent,
    AbilityComponent,
    SavesComponent,
    SpellComponent,

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
    HistoryService,
    ChapterResolver,
    
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
