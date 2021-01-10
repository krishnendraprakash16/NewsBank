import { DataService } from './../services/data.service';

import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Router  } from '@angular/router';

import { AlertController } from '@ionic/angular';
import {AdmobService} from '../provider/admob.service'

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-notifications-news',
  templateUrl: './notifications-news.page.html',
  styleUrls: ['./notifications-news.page.scss'],
})
export class NotificationsNewsPage implements OnInit {


 notifications_news=null;
 skelton_list_items=null;
 data_loaded=false;



  constructor(
  private activatedRoute: ActivatedRoute,
  private dataService : DataService,
  public router: Router,
  public alertController: AlertController,
  private admobService:AdmobService
  ) { 

  this.count_notification_received_empty_all();


   		this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];
        this.admobService.showBannerAd();
       this.ionViewDidEnter();

   }

  ngOnInit() {
  }


  
  ionViewDidEnter(){

   this.get_user_notifications_news();

      this.admobService.checkThenshowInterstitialAd();

    //alert(get_user_distict);
 

  }


  async get_user_notifications_news() {
	

   const ret = await Storage.get({ key: 'notifications' });
   let notifications = JSON.parse(ret.value);

   if(notifications==null){
   	 this.notifications_news = null;
   	 this.data_loaded=true;
 	  this.presentAlertForNoNotification('आपके पास अभी तक कोई नोटिफिकेशन प्राप्त नहीं हुवा हे ।  ');
 
    	return false;
   }
   
   var post_id_arr=Object.values(notifications);
   //alert(post_id_arr);
    //alert(JSON.stringify(notifications));



    this.dataService.get_news_by_post_ids(post_id_arr).subscribe(result => {
      this.notifications_news = result;
      this.data_loaded=true;
      

    });


  //  alert(user_d.title);
   
}








  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      //header: 'Alert',
       message: message,
       buttons: [
        {
          text: 'नहीं',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

           

            //console.log('नहि');

          }
        }, {
          text: 'डिलीट करें',
          handler: () => {
          	 this.notification_empty_all();
            //console.log('Confirm Okay');
          }
        }
      ]

    });

    await alert.present();
  }




async presentAlertForNoNotification(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      //header: 'Alert',
       message: message,
       buttons: [
        {
          text: 'बन्द करे',
           role: 'cancel',
          handler: () => {
          	  this.router.navigate(['/home']);

          }
        }
      ]

    });

    await alert.present();
  }



async notification_empty_alert(){
		 	 
		 this.presentAlert('सभी डिलीट करें ?');

	}


	async notification_empty_all(){
		await Storage.remove({ key: 'notifications' });	
		  this.router.navigate(['/home']);

	}

 

	async count_notification_received_empty_all(){
		await Storage.remove({ key: 'count_notification_received' });	
 
	}



}
