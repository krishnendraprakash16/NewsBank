import { DataService } from './../services/data.service';

import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {NotificationService} from '../provider/notification.service';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-news-world',
  templateUrl: './news-world.page.html',
  styleUrls: ['./news-world.page.scss'],
})
export class NewsWorldPage implements OnInit {

 categories=null;
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
          ) {

 
 
     

  }





 
   ngOnInit() {
     
    this.dataService.get_news_world().subscribe(result => {
      this.categories = result;
    });
 



   this.segment = document.querySelector('.ion_segment_news_world');
  this.slides = document.querySelector('.ion_slides_news_world');

  this.segment.addEventListener('ionChange', (ev) => this.onSegmentChange(ev));
  this.slides.addEventListener('ionSlideDidChange', (ev) => this.onSlideDidChange(ev));


 
 }


 

  // On Segment change slide to the matching slide
  onSegmentChange(ev) {
    this.slideTo(ev.detail.value);
  }

    slideTo(index) {
    this.slides.slideTo(index);
  }

  // On Slide change update segment to the matching value
  async   onSlideDidChange(ev) {
    var index = await this.slides.getActiveIndex();
    this.clickSegment(index);
  }

    clickSegment(index) {
    this.segment.value = index;
  }



  
  ionViewDidEnter(){

  
  this.notificationService.count_notification_received().then(result=>{
        this.count_notification_received=result;

     }); 

  }



}
