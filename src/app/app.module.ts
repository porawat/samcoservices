import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { TakephotoPage } from '../pages/takephoto/takephoto';
import { ChartPage } from '../pages/chart/chart';
import {SignaturePage} from '../pages/signature/signature';
import {XlsxPage} from '../pages/xlsx/xlsx';
import {TutorialPage} from '../pages/tutorial/tutorial';
import { SettingPage } from '../pages/setting/setting';
import { PowsettingPage } from '../pages/powsetting/powsetting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import { Camera } from '@ionic-native/camera';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SettingProvider } from '../providers/setting/setting';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TakephotoPage,
    ChartPage  ,
    SignaturePage,
    XlsxPage,
    TutorialPage,
    SettingPage,
    PowsettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TakephotoPage,
    ChartPage,
    SignaturePage,
    XlsxPage,
    TutorialPage,
    SettingPage,
    PowsettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    SettingProvider,
  ]
})
export class AppModule {}
