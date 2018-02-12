import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/authentication/login/login';
import { ResetPasswordPage } from '../pages/authentication/reset-password/reset-password';
import { SequrityQuestionsPage } from '../pages/authentication/sequrity-questions/sequrity-questions';
import { DemographicsPage } from '../pages/profile/demographics/add/demographics';
import { MyValidationProvider } from '../providers/my-validation/my-validation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SequrityQuestionsPage,
    ResetPasswordPage,
    DemographicsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp,
       {navExitApp: false})

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SequrityQuestionsPage,
    ResetPasswordPage,
    DemographicsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyValidationProvider,

  ]
})
export class AppModule {}
