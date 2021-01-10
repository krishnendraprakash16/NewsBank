import { DataService } from './../services/data.service';

import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Router  } from '@angular/router';

import { AlertController } from '@ionic/angular';
import {AdmobService} from '../provider/admob.service'

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-bookmarked-news',
  templateUrl: './bookmarked-news.page.html',
  styleUrls: ['./bookmarked-news.page.scss'],
})
export class BookmarkedNewsPage implements OnInit {
 
 bookmarked_news=null;
 skelton_list_items=null;
 data_loaded=false;

constructor(
  private activatedRoute: ActivatedRoute,
  private dataService : DataService,
  public router: Router,
  public alertController: AlertController,
  private admobService:AdmobService
 ) {

 
       this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];
        this.admobService.showBannerAd();
       this.ionViewDidEnter();

  }


  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      //header: 'Alert',
       message: message,
       buttons: [
        {
          text: 'नहि',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

           

            //console.log('नहि');

          }
        }, {
          text: 'डिलिट करे',
          handler: () => {
          	 this.bookmark_empty_all();
            //console.log('Confirm Okay');
          }
        }
      ]

    });

    await alert.present();
  }




async presentAlertForNoBookmark(message) {
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



  ngOnInit() {
  }



  
  ionViewDidEnter(){

   this.get_user_bookmarked_news();

      this.admobService.checkThenshowInterstitialAd();

    //alert(get_user_distict);
 

  }


async get_user_bookmarked_news() {
  
   const ret = await Storage.get({ key: 'bookmarks' });
   var bm = JSON.parse(ret.value);

   if(bm==null){
   	 this.bookmarked_news = null;
   	 this.data_loaded=true;
   	 	this.no_bookmark_added_yet();
   	return false;
   }
   
   var post_id_arr=Object.values(bm);
   //alert(post_id_arr);
    //alert(JSON.stringify(bm));



    this.dataService.get_news_by_post_ids(post_id_arr).subscribe(result => {
      this.bookmarked_news = result;
      this.data_loaded=true;
      


    });


  //  alert(user_d.title);
   
}


	async bookmark_empty_alert(){
		 	 
		 this.presentAlert('सभी डिलिट करे ?');

	}


	async bookmark_empty_all(){
		await Storage.remove({ key: 'bookmarks' });	
		  this.router.navigate(['/home']);

	}


	no_bookmark_added_yet(){
		 this.presentAlertForNoBookmark('आपके पास अभी तक कोई बुकमार्क नहीं है। कृपया  बुकमार्क करे। ');
		
	}


}
