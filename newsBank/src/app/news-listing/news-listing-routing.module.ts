import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListingPage } from './news-listing.page';

const routes: Routes = [
  {
    path: '',
    component: NewsListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsListingPageRoutingModule {}
