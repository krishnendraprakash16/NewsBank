import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCityPage } from './my-city.page';

const routes: Routes = [
  {
    path: '',
    component: MyCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCityPageRoutingModule {}
