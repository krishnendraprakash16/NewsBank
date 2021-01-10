import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsWorldPageRoutingModule } from './news-world-routing.module';

import { NewsWorldPage } from './news-world.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsWorldPageRoutingModule
  ],
  declarations: [NewsWorldPage]
})
export class NewsWorldPageModule {}
