import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseYourCityPageRoutingModule } from './choose-your-city-routing.module';

import { ChooseYourCityPage } from './choose-your-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseYourCityPageRoutingModule
  ],
  declarations: [ChooseYourCityPage]
})
export class ChooseYourCityPageModule {}
