import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
     
import {SharedModule} from './module/shared/shared.module'

import {BookmarkService} from './provider/bookmark.service'
import {NotificationService} from './provider/notification.service';

import { ScrollVanishDirective } from './directives/scroll-vanish.directive';

import {AdmobService} from './provider/admob.service'
 
 import { Admob } from '@ionic-native/admob/ngx';
 import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,SharedModule],
  providers: [
     SplashScreen,
    SocialSharing,
    BookmarkService,
    NotificationService,
    ScrollVanishDirective,
    AdmobService,
     Admob,
     FirebaseDynamicLinks,
     ScreenOrientation,
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
