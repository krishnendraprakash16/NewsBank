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
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

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
          public modalController: ModalController,
          ) {

 
     

  }



 async presentModal(title,rd_id,embed_url) {
    const modal = await this.modalController.create({
      component: RadioPlayPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'title': title,
        'rd_id': rd_id,
        'embed_url':embed_url,       
      }
    });
    return await modal.present();
  }

 
   
 
   ngOnInit() {
     
    
    
  this.segment = document.querySelector('.ion_segment_radio');
  this.slides =  document.querySelector('.ion_slides_radio');

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

    this.dataService.get_category_radio().subscribe(result => {
      this.categories = result;
    });
 


     this.notificationService.count_notification_received().then(result=>{
        this.count_notification_received=result;

     });



  }




 playRadio(title,rd_id,embed_url){
 	 
      this.presentModal(title,rd_id,embed_url);

    // alert(title+" | "+embed_url);
 }
 




}
