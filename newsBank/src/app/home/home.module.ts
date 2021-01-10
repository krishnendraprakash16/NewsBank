import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {SharedModule} from '../module/shared/shared.module'
import { ScrollVanishDirective } from '../directives/scroll-vanish.directive';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
   ],
  declarations: [HomePage,ScrollVanishDirective]
})
export class HomePageModule {}
