import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
 
import { Platform } from '@ionic/angular';


import { Admob, AdmobOptions } from '@ionic-native/admob/ngx';

//https://ionicframework.com/docs/native/admob/

@Injectable({
  providedIn: 'root'
})
export class AdmobService {


settings_admob=null;
total_news_details_opened=null;


  constructor(private dataService : DataService,private admob: Admob, public platform: Platform) {

    this.get_settings('AdMob');

   }





  get_settings(group_of){

    this.dataService.get_settings(group_of).subscribe(result => {
        this.settings_admob = result;

        this.adMobIniate();

        //console.log(this.settings_admob);

      });

  }






   adMobIniate(){

    if (this.platform.is('android')) {

         
	     //alert(this.settings_admob.publisherId);
	    // Admob options config
	    const admobOptions: AdmobOptions = {
	      publisherId:this.settings_admob.publisherId,
	      bannerAdId: this.settings_admob.bannerAdId,
	      interstitialAdId:this.settings_admob.interstitialAdId,
	      rewardedAdId:this.settings_admob.rewardedAdId,
	    
	    //below boolean value (true,false)      
	      isTesting: this.settings_admob.isTesting,
	      autoShowBanner: this.settings_admob.autoShowBanner,
	      autoShowInterstitial: this.settings_admob.autoShowInterstitial,
	      autoShowRewarded: this.settings_admob.autoShowRewarded,
	      //adSize: this.admob.AD_SIZE.BANNER
	    };

	    // Set admob options
	    this.admob.setOptions(admobOptions)
	      .then(() => console.log('Admob options have been successfully set'))
	      .catch(err => console.error('Error setting admob options:', err));

	    
	    //this.showBannerAd();
	}

}



showBannerAd(){

	       if (this.platform.is('android')) {

				  // (Optionally) Load banner ad, in order to have it ready to show
				this.admob.createBannerView()
				  .then(() => console.log('Banner ad loaded'))
				  .catch(err => console.error('Error loading banner ad:', err));


				// Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
				this.admob.onAdLoaded().subscribe((ad) => {
				  if (ad.adType === this.admob.AD_TYPE.BANNER) {
				    this.admob.showBannerAd()
				      .then(() => console.log('Banner ad shown'))
				      .catch(err => console.error('Error showing banner ad:', err));
				  }
				});



				// On ad failed to load

				this.admob.onAdFailedToLoad().subscribe(err => console.log('Error loading ad:', err));

			}


	}



	hideBannerAd(){
		// Hide banner ad, but do not destroy it, so it can be shown later on
		// See destroyBannerView in order to hide and destroy banner ad
		this.admob.showBannerAd(false)
		.then(() => console.log('Banner ad hidden'))
		.catch(err => console.error('Error hiding banner ad:', err));


	}


checkThenshowInterstitialAd(){
	 //news opneed counter to show ad
      this.total_news_details_opened=localStorage.getItem('total_news_details_opened');
      if(!this.total_news_details_opened){
       
        this.total_news_details_opened=localStorage.setItem('total_news_details_opened',String(1));
       }

 

        if(this.total_news_details_opened !=0 && this.total_news_details_opened % 5==0){
          		console.log("AD : showInterstitialAd");
                 this.showInterstitialAd();
     	       localStorage.setItem('total_news_details_opened',String(0));

        }

        console.log("total_news_details_opened yet : "+this.total_news_details_opened);
      ///
}



showInterstitialAd(){

	if (this.platform.is('android')) {

		// Request an interstitial ad, in order to be shown later on
		// It is possible to autoshow it via options parameter, see docs
		this.admob.requestInterstitialAd()
		  .then(() => console.log('Interstitial ad loaded'))
		  .catch(err => console.error('Error loading interstitial ad:', err));


		// Show an interstitial ad (requestInterstitialAd must be called before)
		this.admob.onAdLoaded().subscribe((ad) => {
		  if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
		    this.admob.showInterstitialAd()
		      .then(() => console.log('Interstitial ad shown'))
		      .catch(err => console.error('Error showing interstitial ad:', err));
		  }
		});

	}

}







showRewardedAd(){
	// Request a rewarded ad
	 if (this.platform.is('android')) {

		this.admob.requestRewardedAd()
		  .then(() => console.log('Rewarded ad loaded'))
		  .catch(err => console.error('Error loading rewarded ad:', err));


		// Show rewarded ad (requestRewardedAd must be called before)
		this.admob.onAdLoaded().subscribe((ad) => {
		  if (ad.adType === this.admob.AD_TYPE.REWARDED) {
		    this.admob.showRewardedAd()
		      .then(() => console.log('Rewarded ad shown'))
		      .catch(err => console.error('Error showing rewarded ad:', err));
		  }
		});

	}

}




//more option found here https://ionicframework.com/docs/native/admob/



}
