import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
     
    AppRoutingModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule {}
