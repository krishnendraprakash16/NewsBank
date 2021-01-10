import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTvPageRoutingModule } from './live-tv-routing.module';

import { LiveTvPage } from './live-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTvPageRoutingModule
  ],
  declarations: [LiveTvPage]
})
export class LiveTvPageModule {}
