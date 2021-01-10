import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { 
    path: '', 
    redirectTo: 'welcome', 
    pathMatch: 'full' 
  },
  {
    path: 'news-listing',
    loadChildren: () => import('./news-listing/news-listing.module').then( m => m.NewsListingPageModule)
  },
  {
    path: 'news-details/:post_id',
    loadChildren: () => import('./news-details/news-details.module').then( m => m.NewsDetailsPageModule)
  },
  {
    path: 'my-city',
    loadChildren: () => import('./my-city/my-city.module').then( m => m.MyCityPageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./trending/trending.module').then( m => m.TrendingPageModule)
  },
  {
    path: 'category-details/:cp_id',
    loadChildren: () => import('./category-details/category-details.module').then( m => m.CategoryDetailsPageModule)
  },
  {
    path: 'news-details-modal',
    loadChildren: () => import('./modal/news-details-modal/news-details-modal.module').then( m => m.NewsDetailsModalPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'district-news/:did',
    loadChildren: () => import('./district-news/district-news.module').then( m => m.DistrictNewsPageModule)
  },
  {
    path: 'choose-your-city',
    loadChildren: () => import('./choose-your-city/choose-your-city.module').then( m => m.ChooseYourCityPageModule)
  },
  {
    path: 'live-tv',
    loadChildren: () => import('./live-tv/live-tv.module').then( m => m.LiveTvPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'news-world',
    loadChildren: () => import('./news-world/news-world.module').then( m => m.NewsWorldPageModule)
  },
  {
    path: 'news-world-details/:nw_id',
    loadChildren: () => import('./news-world-details/news-world-details.module').then( m => m.NewsWorldDetailsPageModule)
  },
  {
    path: 'news-gallery',
    loadChildren: () => import('./news-gallery/news-gallery.module').then( m => m.NewsGalleryPageModule)
  },
  {
    path: 'tag-details/:t_id',
    loadChildren: () => import('./tag-details/tag-details.module').then( m => m.TagDetailsPageModule)
  },
  {
    path: 'bookmarked-news',
    loadChildren: () => import('./bookmarked-news/bookmarked-news.module').then( m => m.BookmarkedNewsPageModule)
  },
  {
    path: 'notifications-news',
    loadChildren: () => import('./notifications-news/notifications-news.module').then( m => m.NotificationsNewsPageModule)
  },
  {
    path: 'radio-play',
    loadChildren: () => import('./modal/radio-play/radio-play.module').then( m => m.RadioPlayPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'basic-pages/:bid',
    loadChildren: () => import('./basic-pages/basic-pages.module').then( m => m.BasicPagesPageModule)
  },
  {
    path: 'choose-your-other-cities',
    loadChildren: () => import('./choose-your-other-cities/choose-your-other-cities.module').then( m => m.ChooseYourOtherCitiesPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('./notification-settings/notification-settings.module').then( m => m.NotificationSettingsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
