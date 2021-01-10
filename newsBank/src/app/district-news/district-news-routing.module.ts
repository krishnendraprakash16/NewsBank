import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictNewsPage } from './district-news.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictNewsPageRoutingModule {}
