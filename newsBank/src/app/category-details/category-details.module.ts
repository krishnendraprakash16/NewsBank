import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailsPageRoutingModule } from './category-details-routing.module';

import { CategoryDetailsPage } from './category-details.page';

 import {SharedModule} from '../module/shared/shared.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [CategoryDetailsPage]
})
export class CategoryDetailsPageModule {}
