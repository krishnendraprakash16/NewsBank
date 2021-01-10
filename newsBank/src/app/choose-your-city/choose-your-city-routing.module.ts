import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseYourCityPage } from './choose-your-city.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseYourCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseYourCityPageRoutingModule {}
