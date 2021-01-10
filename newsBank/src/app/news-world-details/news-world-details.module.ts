import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsWorldDetailsPageRoutingModule } from './news-world-details-routing.module';

import { NewsWorldDetailsPage } from './news-world-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsWorldDetailsPageRoutingModule
  ],
  declarations: [NewsWorldDetailsPage]
})
export class NewsWorldDetailsPageModule {}
