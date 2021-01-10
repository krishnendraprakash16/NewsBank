import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCityPageRoutingModule } from './my-city-routing.module';

import { MyCityPage } from './my-city.page';
import {SharedModule} from '../module/shared/shared.module'
//import { ScrollVanishDirective } from '../directives/scroll-vanish.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCityPageRoutingModule,
    SharedModule
  ],
  declarations: [MyCityPage,
  //ScrollVanishDirective
  ]
})
export class MyCityPageModule {}
