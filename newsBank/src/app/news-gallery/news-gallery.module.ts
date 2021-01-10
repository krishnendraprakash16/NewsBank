import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsGalleryPageRoutingModule } from './news-gallery-routing.module';

import { NewsGalleryPage } from './news-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsGalleryPageRoutingModule
  ],
  declarations: [NewsGalleryPage]
})
export class NewsGalleryPageModule {}
