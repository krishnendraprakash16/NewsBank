import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioPlayPageRoutingModule } from './radio-play-routing.module';

import { RadioPlayPage } from './radio-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioPlayPageRoutingModule
  ],
  declarations: [RadioPlayPage]
})
export class RadioPlayPageModule {}
