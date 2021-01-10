import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsWorldDetailsPage } from './news-world-details.page';

const routes: Routes = [
  {
    path: '',
    component: NewsWorldDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsWorldDetailsPageRoutingModule {}
