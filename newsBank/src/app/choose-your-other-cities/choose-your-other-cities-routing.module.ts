import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseYourOtherCitiesPage } from './choose-your-other-cities.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseYourOtherCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseYourOtherCitiesPageRoutingModule {}
