import {NgModule, Component, OnInit, Input } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { NewsDetailsModalPage } from '../../modal/news-details-modal/news-details-modal.page';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {

  @Input() item;

  constructor( 
              public modalController: ModalController,
              public firebaseDynamicLinks: FirebaseDynamicLinks
          ) { 



    }

  ngOnInit() {}



  async news_share_modal(post_id,title,news_url) {


    this.firebaseDynamicLinks.createUnguessableDynamicLink({
      'domainUriPrefix':'https://ingnewsbank.page.link',
      'link': news_url+'?nid='+post_id,
       'androidInfo': {
        'androidPackageName': 'com.newsbank.app',
 
      },
      
  }).then((url)=>{

    return this.openModal(post_id,title,url);

  });
      
 

  return false;
}




async openModal(post_id,title,news_url){
  const modal = await this.modalController.create({
    component: NewsDetailsModalPage,
    cssClass: 'my-custom-class',
    backdropDismiss:true,
    showBackdrop:true,
    swipeToClose:true,
    componentProps: {
      'post_id':post_id,
      'title':title,
      'news_url': news_url,
      
    }
  });
  return await modal.present();

}




}
