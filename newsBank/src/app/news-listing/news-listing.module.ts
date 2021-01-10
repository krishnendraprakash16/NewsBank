import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsListingPageRoutingModule } from './news-listing-routing.module';

import { NewsListingPage } from './news-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsListingPageRoutingModule
  ],
  declarations: [NewsListingPage]
})
export class NewsListingPageModule {}
