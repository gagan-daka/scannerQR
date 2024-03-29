import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [BarcodeScanner,InAppBrowser,File,EmailComposer,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
