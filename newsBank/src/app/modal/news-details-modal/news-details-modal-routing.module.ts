import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailsModalPage } from './news-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDetailsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDetailsModalPageRoutingModule {}
