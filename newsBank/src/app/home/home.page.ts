import { DataService } from './../services/data.service';

  import { Component, ViewChild, ElementRef,OnInit,Input } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

import {AdmobService } from '../provider/admob.service'
import {NotificationService} from '../provider/notification.service';

import {IonContent, ModalController } from '@ionic/angular';

import { IonSlides } from '@ionic/angular';
import { IonRouterOutlet,Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


import * as $ from "jquery";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor } from '@capacitor/core';

 const { App } = Plugins;

const { Storage } = Plugins;
const { PushNotifications } = Plugins;
const { Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
    alertPresented: any;

  app_link="https://play.google.com/store/apps/details?id=com.newsbank.app";

 user_district=null;
 user_did=null;
 home_top_bar_news_category_all=null;
 user_dirtrict_latest_news=[];


 current_cp_id=null;

 skelton_list_items=null;

 
 home_latest_news=null;
 home_top_bar_news_all=[];
 page=[];

count_notification_received=0;

fcm_token=null;

 ads=null;

 segment=null;
 slides=null;
ion_slide_home_user_district_news=null;

//https://swiperjs.com/api/

  slideOpts = {
    spaceBetween: 12,
 		 loop:true,	
 	 		loopedSlides:10,  // it will make clone to 10 times , to fill like infinite loop
 	 	 	 autoplay: {
          delay:1,
          disableOnInteraction: false,

			  },
 	 	 	slidesPerView: 2,	      
  		 	speed:7000,
	      freeMode: true,
	      effect:'coverflow',
	      coverflowEffect: {
	        rotate: 50,
	        stretch: 0,
	        depth: 100,
	        modifier: 1,
	        slideShadows: true,
	      }
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
        public router: Router,
        private dataService : DataService,
        private notificationService: NotificationService,
        private admobService:AdmobService,
        public platform: Platform,
        public modalController: ModalController,
        private routerOutlet: IonRouterOutlet,
        public alertController: AlertController,
           private screenOrientation: ScreenOrientation,


        ) {

          
          this.alertPresented = false

      //this.presentExitAlert();
 
       this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];

       
      this.home_top_bar_news_category();



       this.ionViewDidEnter();


        this.platform.backButton.subscribeWithPriority(-1, () => {

          
         //to set portrait so that if user set landscape in live TV page 
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);


        if (!this.routerOutlet.canGoBack()) {
          
            this.presentExitAlert();
  
          //App.exitApp();
    
    
        }
      });
        



        //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
     
    };

  }





  async presentExitAlert() {
    //below implemented to prevent multiple alert open
    //https://stackoverflow.com/questions/39940657/prevent-multiple-ionic-alerts-from-stacking-up

    let vm = this
    if(!vm.alertPresented) {
      vm.alertPresented = true

    const alert = await this.alertController.create({
      cssClass: 'alert_exit',
       header: 'NEWSBANK',
       message: 'क्या आप ऍप बंद करना चाहते हैं ?',
       buttons: [
        {
          text: 'रेटिंग दें',
          cssClass: 'secondary',
          handler: (blah) => {
             window.open(this.app_link,"_system");

          }
        },
        {
          text: 'नहीं',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async (blah) => {
            //console.log('नहि');
            vm.alertPresented = false

            

          }
        }, {
          text: 'बंद करें',
          handler: () => {
            App.exitApp();
          }
        }
      ]

    });

    await alert.present();

  }

  
  }




doRefresh(event) {
   // console.log('Begin async operation');
     this.ionViewDidEnter();

    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  
  }




  
ionViewWillEnter(){
  //to update when user change his district 
  this.get_user_district();

}


async get_user_district() {
  this.user_dirtrict_latest_news=[];
  
  const ret = await Storage.get({ key: 'user_distict' });
  const user_d = JSON.parse(ret.value);

  //alert(JSON.stringify(user_d));
    this.user_district=user_d?.title;
	this.user_did=user_d?.id;

 

    this.dataService.get_latest_news_by_district(this.user_did,1).subscribe((result:any) => {
       
      
        for (let i = 0; i < result.news.data.length; i++) {
          this.user_dirtrict_latest_news.push(result.news.data[i]);
        }
       
       
        setTimeout(()=>{
          //console.log('aa');
          this.ion_slide_home_user_district_news.startAutoplay();

        },2000);

       
       

    });


  //  alert(user_d.title);
   
}


 
   ngOnInit() {
      

 
    
  this.segment = document.querySelector('.ion_segment_home');
  this.slides =  document.querySelector('.ion_slides_home');

  //this.segment.addEventListener('ionChange', (cp_id,ev) => this.onSegmentChange(cp_id,ev));


//  this.slides.addEventListener('ionSlideDidChange', (ev) =>  this.onSlideDidChange(ev) );

  this.slides.addEventListener('ionSlideDrag', (ev) =>  this.ionSlideDrag(ev) );





    //for user district news keep sliding after touch end
     this.ion_slide_home_user_district_news =  document.querySelector('.ion_slide_home_user_district_news');



     //this still not working,
     this.ion_slide_home_user_district_news.addEventListener('ionSlidesDidLoad', (ev) => {

      setTimeout(()=>{
        //console.log('slide loaded');
        this.ion_slide_home_user_district_news.startAutoplay();
 
      },4000);
     
   } );


     this.ion_slide_home_user_district_news.addEventListener('ionSlideTouchEnd', (ev) => {

       //console.log('Re start');
        this.ion_slide_home_user_district_news.startAutoplay();
 
    } );

     
    /////////


  }




  // On Segment change slide to the matching slide
    onSegmentChange(cp_id,ev) {
    // alert(cp_id);

     
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
    
    this.current_cp_id=this.home_top_bar_news_category_all[index-1].cp_id;
    this.home_top_bar_news_of_category(this.current_cp_id,"");
 	$('.spinner').show(1).delay(1000).hide(1);
      this.ionContent.scrollToTop(300);

  //alert(index);

}
  


    this.clickSegment(index);
  }






 async   ionSlideDrag(ev) {
   // 
    var index = await this.slides.getActiveIndex();
    //console.log(index);
//alert('a');


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




		 this.admobService.showBannerAd();
     this.admobService.checkThenshowInterstitialAd();

		 

		this.dataService.home_latest_news().subscribe(result => {
	      this.home_latest_news = result;
	    });
		 
	    
this.notificationService.count_notification_received().then(result=>{
      this.count_notification_received=result;

    });
    //this is required when user go to other page then return     
   
	  
	   
  
  this.dataService.get_custom_ad().subscribe(result => {
      this.ads = result;
    });

 


   


	}





    home_top_bar_news_category(){


       this.dataService.home_top_bar_news_category().subscribe((result:any) => {
          

          this.home_top_bar_news_category_all=result;
             
                   for (let i = 0; i < this.home_top_bar_news_category_all.length; i++) {

                        this.home_top_bar_news_all[this.home_top_bar_news_category_all[i].cp_id]=[];

                        this.page[this.home_top_bar_news_category_all[i].cp_id]=[];
                   }   

  
        });


       //console.log(this.home_top_bar_news_category_all);
   }






    home_top_bar_news_of_category(cp_id,event){


     this.page[cp_id]++;

       this.dataService.home_top_bar_news_of_category(cp_id,this.page[cp_id]).subscribe((result:any) => {
          
 

           for (let i = 0; i < result.data.length; i++) {
                      

                     this.home_top_bar_news_all[cp_id].push(result.data[i]);
      
 

            }
           

           // console.log(this.home_top_bar_news_all);



           if(event){
               event.target.complete();
      

          }



                    

          /*  setTimeout(()=>{
              this.home_top_bar_news();
            },30*1000);  //recall in each 30 sec*/


        });
   }






 doInfinite(event) {
    
		
		for (let i = 0; i < this.home_top_bar_news_category_all.length; i++) {
       



         this.home_top_bar_news_of_category(this.home_top_bar_news_category_all[i].cp_id,event);
        
        }


       

    
       event.preventDefault();


     setTimeout(()=>{
        
        

     },5000);


  
  }










  


}
