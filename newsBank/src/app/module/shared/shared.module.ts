import {NgModule, Component, OnInit, Input } from '@angular/core';
import {Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

 
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
 
import { NewsItemComponent } from '../../component/news-item/news-item.component';

import { AdItemComponent } from '../../component/ad-item/ad-item.component';


@NgModule({
  declarations: [NewsItemComponent,AdItemComponent],
  imports: [
  	IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    NewsItemComponent,
    AdItemComponent
  ]
})
export class SharedModule { }
