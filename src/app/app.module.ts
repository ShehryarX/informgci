import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { ExpandableLayout2Module } from '../components/list-view/expandable/layout-2/expandable-layout-2.module';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { GoogleCardLayout3Module } from '../components/list-view/google-card/layout-3/google-card-layout-3.module';
import { QuotePage } from '../pages/quote/quote';
import { DragAndDropLayout1Module } from '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module';
import { TimetablePage } from '../pages/timetable/timetable';
import { TimetableCourseSelectorPage } from '../pages/timetable-course-selector/timetable-course-selector';
import { SearchBarLayout2Module } from '../components/search-bar/layout-2/search-bar-layout-2.module';
import { environment } from '../environment/environment';
import { NativeStorage } from '@ionic-native/native-storage';
import { Push } from '@ionic-native/push';
import { WizardPage } from '../pages/wizard/wizard';
import { WizardLoaderPage } from '../pages/wizard-loader/wizard-loader';
import { WizardLayout3Module } from '../components/wizard/layout-3/wizard-layout-3.module';
import { SwipeToDismissLayout1 } from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1';
import { SwipeToDismissLayout1Module } from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { AssignmentsListPage } from '../pages/assignments-list/assignments-list';

const firebaseConfig = {
  apiKey: "AIzaSyBr7XDXOquv1tly2fjbanexbu9B-ybGIqk",
  authDomain: "mgci-app.firebaseapp.com",
  databaseURL: "https://mgci-app.firebaseio.com",
  projectId: "mgci-app",
  storageBucket: "",
  messagingSenderId: "420823562722"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuotePage,
    TimetablePage,
    TimetableCourseSelectorPage,
    WizardPage,
    WizardLoaderPage,
    AssignmentsListPage
  ],
  imports: [
    BrowserModule,
    GoogleCardLayout3Module,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),   
    IonicModule.forRoot(MyApp),
    ExpandableLayout2Module,
    DragAndDropLayout1Module,
    WizardLayout3Module,
    SearchBarLayout2Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    SwipeToDismissLayout1Module
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuotePage,
    TimetablePage,
    TimetableCourseSelectorPage,
    WizardPage,
    WizardLoaderPage,
    AssignmentsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    Push
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
