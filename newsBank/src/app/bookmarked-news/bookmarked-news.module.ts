import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkedNewsPageRoutingModule } from './bookmarked-news-routing.module';

import { BookmarkedNewsPage } from './bookmarked-news.page';
import {SharedModule} from '../module/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarkedNewsPageRoutingModule,
    SharedModule
  ],
  declarations: [BookmarkedNewsPage]
})
export class BookmarkedNewsPageModule {}
