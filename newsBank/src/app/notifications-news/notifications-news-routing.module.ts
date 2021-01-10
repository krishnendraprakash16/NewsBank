import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsNewsPage } from './notifications-news.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsNewsPageRoutingModule {}
