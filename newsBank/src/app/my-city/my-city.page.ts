import { DataService } from './../services/data.service';

  import { Component, ViewChild, ElementRef,OnInit,Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {AdmobService} from '../provider/admob.service'
import {NotificationService} from '../provider/notification.service';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

 import {IonContent, IonSlides } from '@ionic/angular';

import * as $ from "jquery";


@Component({
  selector: 'app-my-city',
  templateUrl: './my-city.page.html',
  styleUrls: ['./my-city.page.scss'],
})
export class MyCityPage implements OnInit {




 user_district=null;
 user_did=null;
ad_did=null;

 user_dirtrict_latest_news=[];
 user_other_dirtrict_latest_news=[];

 skelton_list_items=null;

  ads=null;
 user_other_districts=null;
 
current_district=null;

count_notification_received=0;


page=1;

 segment=null;
 slides=null;

//https://swiperjs.com/api/

  slideOpts = {
        loop:true,
        loopedSlides:1,
         autoplay:true,         
        slidesPerView: 1,
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


  @ViewChild(IonContent) ionContent: IonContent;




//https://www.freakyjolly.com/ionic-ion-slider-effects-tutorial/#.X934mtgzbIU
@ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
   pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },   
  };

constructor(
        private activatedRoute: ActivatedRoute,
        private dataService : DataService,
        private notificationService: NotificationService,
        private admobService:AdmobService,
        ) {

 
       this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];
       this.admobService.showBannerAd();
       
    


      // this issue by calling 2 times api
      // this.ionViewDidEnter();


  }




doRefresh(event) {
   // console.log('Begin async operation');
     this.ionViewDidEnter();

    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  
  }


  

  ngOnInit() {


  this.segment = document.querySelector('.ion_segment_my_city');
  this.slides =  document.querySelector('.ion_slide_my_city');

  //this.segment.addEventListener('ionChange', (cp_id,ev) => this.onSegmentChange(cp_id,ev));


//  this.slides.addEventListener('ionSlideDidChange', (ev) =>  this.onSlideDidChange(ev) );

  this.slides.addEventListener('ionSlideDrag', (ev) =>  this.ionSlideDrag(ev) );

  }





  // On Segment change slide to the matching slide
    onSegmentChange(cp_id,ev) {
    //alert(cp_id);

     
     //this.home_top_bar_news_of_category(cp_id,"");
     //$('.spinner').show(1).delay(1000).hide(1);
      //this.ionContent.scrollToTop(300);
      
      this.ionSlideDrag(ev);
      this.slideTo(ev);
      //this.slideTo(ev.detail.value);
  }






    slideTo(index) {
      // alert(index);

    this.slides.slideTo(index);
  }

  
  // On Slide change update segment to the matching value
  async   onSlideDidChange(ev) {
   // 
     var index = await this.slides.getActiveIndex();
    

    //console.log(index);
  //alert(index);



 if(index!=0){ //for not to load on first slide
     //alert( this.current_district);
      this.current_district=this.user_other_districts[index-1];

     
    this.get_district_news_by_name(index,this.current_district);
   this.get_ad_of_district(this.current_district,'name');

   $('.spinner').show(1).delay(1000).hide(1);
      this.ionContent.scrollToTop(300);

  //alert(index);

}else{
     this.get_ad_of_district(this.user_did,'id');

}

    this.clickSegment(index);

  }






 async   ionSlideDrag(ev) {
   // 
    var index = await this.slides.getActiveIndex();
    //console.log(index);
 //alert(index);


//https://stackoverflow.com/questions/57047922/programmatically-scroll-ion-segment
//to move segment bottom along with slide
 document.getElementById("segment-"+index).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
///


     
  }




   clickSegment(index) {
    this.segment.value = index;
  }




  
  ionViewDidEnter(){

   this.get_user_district();
   this.get_user_other_districts();

 
     
    



  this.notificationService.count_notification_received().then(result=>{
        this.count_notification_received=result;

      });

     this.admobService.checkThenshowInterstitialAd();


  }



async get_user_district() {
  const ret = await Storage.get({ key: 'user_distict' });
  const user_d = JSON.parse(ret.value);

  //alert(JSON.stringify(user_d));
    this.user_district=user_d.title;
	this.user_did=user_d.id;


   this.get_latest_news_by_district(this.user_did,this.page,"");

   this.get_ad_of_district(this.user_did,'id');

   //alert(this.user_did);
   
}




get_latest_news_by_district(user_did,page,event){
     



     this.dataService.get_latest_news_by_district(user_did,this.page).subscribe((result:any) => {
       
      
        for (let i = 0; i < result.news.data.length; i++) {
          this.user_dirtrict_latest_news.push(result.news.data[i]);
        }
       
       //console.log(this.user_dirtrict_latest_news);

       if(event){
           event.target.complete();
  

      }



    });


}


 doInfinite(event) {
     this.page++;
 
     this.get_latest_news_by_district(this.user_did,this.page,event);
  
  }




async get_user_other_districts() {
  
   const ret = await Storage.get({ key: 'user_other_districts' });
   var bm = JSON.parse(ret.value);

    
   var did_arr=Object.values(bm);
    this.user_other_districts = did_arr;

    for(let i=0;i<=this.user_other_districts.length;i++){
      this.user_other_dirtrict_latest_news[i]=[];
    }

    //console.log("User Other Districts arr "+this.user_other_districts); 
    
    //this.user_other_districts_temp=did_arr;

   //alert(this.user_other_districts);
    //alert(JSON.stringify(bm));



   


  //  alert(user_d.title);
   
}






get_ad_of_district(did,type){
  
  this.dataService.get_ad_of_district(did,type).subscribe(result => {
      this.ads = result;
    });

}


get_district_news_by_name(index,district_name){


     this.dataService.get_district_news_by_name(district_name).subscribe((result:any) => {
       
       
          this.user_other_dirtrict_latest_news[index]=result;
        
       console.log('index :'+index)
        //console.log( this.user_other_dirtrict_latest_news[index]);
/*
       if(event){
           event.target.complete();
  

      }*/



    });
}




   custom_ad_modal(img){
 
     (<HTMLElement>document.querySelector('#custom_ad_modal_my_city .custom_ad_modal_body')).innerHTML="<img src='"+img+"' class='img-fluid'>";

     return false;
    
  }




}
