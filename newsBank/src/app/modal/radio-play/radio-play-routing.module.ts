import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioPlayPage } from './radio-play.page';

const routes: Routes = [
  {
    path: '',
    component: RadioPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioPlayPageRoutingModule {}
