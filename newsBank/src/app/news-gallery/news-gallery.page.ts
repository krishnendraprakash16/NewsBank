import { DataService } from './../services/data.service';

import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {NotificationService} from '../provider/notification.service';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import { IonSlides } from '@ionic/angular';
import { RadioPlayPage } from '../modal/radio-play/radio-play.page';


@Component({
  selector: 'app-news-gallery',
  templateUrl: './news-gallery.page.html',
  styleUrls: ['./news-gallery.page.scss'],
})
export class NewsGalleryPage implements OnInit {


  news_galleries=null;
 count_notification_received=0;

 segment=null;
 slides=null; 

  slideOpts = {
 		 	loop:true,
 	 		loopedSlides:1,
 	 	 	autoplay:true,  	 		
	      slidesPerView: 2,
	      freeMode: true,
	      coverflowEffect: {
	        rotate: 50,
	        stretch: 0,
	        depth: 100,
	        modifier: 1,
	        slideShadows: true,
	      }
	    }


 slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

constructor(
          private activatedRoute: ActivatedRoute,
          private notificationService: NotificationService,
          private dataService : DataService,
          public modalController: ModalController,
          ) {

 
     

  }



 
   
 
   ngOnInit() {
     
    
   
 

  }

  
 



  
  ionViewDidEnter(){

    this.dataService.get_news_gallery().subscribe(result => {
      this.news_galleries = result;
    });
 



     this.notificationService.count_notification_received().then(result=>{
        this.count_notification_received=result;

     });



  }



 

}
