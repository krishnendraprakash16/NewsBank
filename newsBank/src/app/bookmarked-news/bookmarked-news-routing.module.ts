import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkedNewsPage } from './bookmarked-news.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarkedNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkedNewsPageRoutingModule {}
