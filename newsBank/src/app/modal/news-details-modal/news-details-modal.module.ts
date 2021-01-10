import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailsModalPageRoutingModule } from './news-details-modal-routing.module';

import { NewsDetailsModalPage } from './news-details-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsModalPageRoutingModule
  ],
  declarations: [NewsDetailsModalPage]
})
export class NewsDetailsModalPageModule {}
