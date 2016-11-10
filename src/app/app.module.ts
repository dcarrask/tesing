import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule }   from '@angular/router';

import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpModule }      from '@angular/http';

import { AngularFireModule } from 'angularfire2';
// import { ParentsFilterPipe } from './_filter/filter-pipe';
import './rxjs-extensions';

import { ParentSearchComponent } from './parent-search.component'
import { ParentSearchService } from './parent-search.service'

import { ParentsFilterPipe } from './pipes/common_pipes';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CustomModal } from './custom-modal-sample';
// import { SweetAlertService } from 'ng2-sweetalert2';

import { AppComponent } from './app.component';

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
    ModalModule.forRoot(),
    // NgbModule.forRoot(),
    BootstrapModalModule
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
  // entryComponents: [ CustomModal ]
})


export class AppModule { }
