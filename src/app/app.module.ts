import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule }   from '@angular/router';

import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpModule }      from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
// import { ParentsFilterPipe } from './_filter/filter-pipe';
import './rxjs-extensions';

import { ParentSearchComponent } from './parent-search.component'
import { ParentSearchService } from './parent-search.service'

import { ParentsFilterPipe } from './pipes/common_pipes';

export const firebaseConfig = {
  apiKey: "AIzaSyDFmkKkFVgT447JIloPhHN2YbGH8b_tl3I",
  authDomain: "eurheka-db.firebaseapp.com",
  databaseURL: "https://eurheka-db.firebaseio.com",
  storageBucket: "eurheka-db.appspot.com",
  messagingSenderId: "323347446992"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // RouterModule.forRoot([
    //   {
    //     path: 'main',
    //     component: AppComponent
    //   }
    // ])
  ],
  // directives: [  ]
  declarations: [
    AppComponent,
    // ParentsFilterPipe
    ParentSearchComponent,
    ParentsFilterPipe,
  ],
  providers: [
    ParentSearchService
  ],
  bootstrap: [AppComponent],
})


export class AppModule { }
