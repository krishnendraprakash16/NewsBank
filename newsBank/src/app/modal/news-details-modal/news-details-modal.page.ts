import { Component, OnInit } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController,ToastController  } from '@ionic/angular';

import {BookmarkService} from '../../provider/bookmark.service';
 

@Component({
  selector: 'app-news-details-modal',
  templateUrl: './news-details-modal.page.html',
  styleUrls: ['./news-details-modal.page.scss'],
})
export class NewsDetailsModalPage implements OnInit {

post_id=null;
title=null;
news_url=null;
 
 share_title="अब एक ही ऍप में पाऐं सभी प्रमुख अखबारों, पोर्टलों के समाचार हिंदी में। लाईव टीवी, रेडियो, एफएम, बॉलीवुड के सदाबहार गाने लाईव। नोटिफिकेशन सहित, अभी डाउनलोड करें ";

  constructor(
    private socialSharing: SocialSharing,
    public modalController: ModalController,
    private bookmarkService: BookmarkService,
    private toastController: ToastController
   ) { }

  ngOnInit() {
  }


 
 socialShare(title,news_url){
    //alert(news_url);

    var options = {
        message: title, // not supported on some apps (Facebook, Instagram)
        url: news_url,        
      };

      this.socialSharing.shareWithOptions(options);

  }



async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        animated:true,
        duration: 1000,
         position: 'bottom',
         color:'light',
       });
      toast.present();
      }


 add_bookmark_news(post_id){
   this.bookmarkService.add_bookmark_news(post_id);
   this.modalController.dismiss();
   this.presentToast('Saved to Bookmark');
 
 }



}
