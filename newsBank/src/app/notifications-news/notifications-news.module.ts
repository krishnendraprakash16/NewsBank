import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsNewsPageRoutingModule } from './notifications-news-routing.module';
import {SharedModule} from '../module/shared/shared.module'

import { NotificationsNewsPage } from './notifications-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NotificationsNewsPageRoutingModule
  ],
  declarations: [NotificationsNewsPage]
})
export class NotificationsNewsPageModule {}
