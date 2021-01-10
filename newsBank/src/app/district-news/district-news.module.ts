import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictNewsPageRoutingModule } from './district-news-routing.module';

import { DistrictNewsPage } from './district-news.page';
import {SharedModule} from '../module/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictNewsPageRoutingModule,
    SharedModule
  ],
  declarations: [DistrictNewsPage]
})
export class DistrictNewsPageModule {}
