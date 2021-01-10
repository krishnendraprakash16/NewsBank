import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseYourOtherCitiesPageRoutingModule } from './choose-your-other-cities-routing.module';

import { ChooseYourOtherCitiesPage } from './choose-your-other-cities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseYourOtherCitiesPageRoutingModule
  ],
  declarations: [ChooseYourOtherCitiesPage]
})
export class ChooseYourOtherCitiesPageModule {}
