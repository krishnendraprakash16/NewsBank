import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsWorldPage } from './news-world.page';

const routes: Routes = [
  {
    path: '',
    component: NewsWorldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsWorldPageRoutingModule {}
