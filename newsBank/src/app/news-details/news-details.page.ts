import { DataService } from './../services/data.service';
import {BookmarkService} from '../provider/bookmark.service';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {AdmobService } from '../provider/admob.service'

 import { DomSanitizer } from '@angular/platform-browser';

 import { ActionSheetController,ModalController  } from '@ionic/angular';

 import { NewsDetailsModalPage } from '../modal/news-details-modal/news-details-modal.page';
 import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';


 import * as $ from "jquery";



@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})




export class NewsDetailsPage implements OnInit {

 item=null;
 icon_notification='notifications-outline';  
 post_id=null; 
is_open_in_web_view=false;
 
 total_news_details_opened=null;
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService : DataService,
    public sanitizer: DomSanitizer,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private bookmarkService: BookmarkService,
    private admobService:AdmobService,
    public firebaseDynamicLinks: FirebaseDynamicLinks


 
    ) {
      

      //news opneed counter to show ad
      this.total_news_details_opened=localStorage.getItem('total_news_details_opened');
      if(!this.total_news_details_opened){
       
        this.total_news_details_opened=localStorage.setItem('total_news_details_opened',String(1));
       }

        this.total_news_details_opened++;
        localStorage.setItem('total_news_details_opened',this.total_news_details_opened);
 
      console.log("total_news_details_opened : "+this.total_news_details_opened);
      ///

   }



   

   ngOnInit() {
    // Get the ID that was passed with the URL
    this.post_id = this.activatedRoute.snapshot.paramMap.get('post_id');
 
     
    this.dataService.news_details(this.post_id).subscribe(result => {
      this.item = result;

      if(this.item.is_open_in_web_view==1){
        this.is_open_in_web_view=true;
      }

    });

      
	
    


  }




    ionViewWillEnter(){
      this.admobService.hideBannerAd()

     this.bookmarkService.check_bookmarks(this.post_id).then((result) => {
        
         if(result){
          this.icon_notification='notifications';  
      
        }

     });
    

     
        
    }



  reload_page(){
    window.location.reload();
  }

  //below doRefresh not working or not tested yet
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  
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





 bookmark_news(post_id){
   this.bookmarkService.bookmark_news(post_id);

 }







}

 