import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactHttpProvider } from '../providers/contact-http/contact-http';
import { CellphoneCompanyHttpProvider } from '../providers/cellphone-company-http/cellphone-company-http';
import { ContactsPage } from '../pages/contacts/contacts';
import { HttpClientModule } from '@angular/common/http';
import { ContactDeletePage } from '../pages/contact-delete/contact-delete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    ContactDeletePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    ContactDeletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactHttpProvider,
    CellphoneCompanyHttpProvider
  ]
})
export class AppModule {}
