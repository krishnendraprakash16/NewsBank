import { DataService } from './../services/data.service';

import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import {AdmobService } from '../provider/admob.service'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonRouterOutlet,Platform } from '@ionic/angular';

@Component({
  selector: 'app-live-tv',
  templateUrl: './live-tv.page.html',
  styleUrls: ['./live-tv.page.scss'],
})
export class LiveTvPage implements OnInit {

   live_tvs=null;	
 
  constructor(
  	private dataService : DataService,
  	public sanitizer: DomSanitizer,
    private admobService:AdmobService,
   private screenOrientation: ScreenOrientation,
   public platform: Platform,


   


  	) {

   
 


  	}




  ngOnInit() {

  	 


  }




  ionViewWillEnter(){

  		//this.fullScreen();

       this.admobService.hideBannerAd()


//  this.showTheLiveTv(this.default_live_tv.embed_url);

   this.get_live_tvs();
 
    //alert(get_user_distict);
 

  }


  fullScreen(){

  	let el=document.getElementById("live_tv_page");

  	let currentOrientation=this.screenOrientation.type;
  	//alert(currentOrientation);
  	if( (currentOrientation=='landscape') || (currentOrientation=='landscape-primary') ){
  		  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  		  el.classList.add("portrait");
 			el.classList.remove("landscape");


  	}else{
  		 this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

  		 el.classList.remove("portrait");
 		 el.classList.add("landscape");


  	}

  	 //this.screenOrientation.unlock();


  }



   get_live_tvs() {
   

	    this.dataService.get_live_tvs().subscribe(result => {
	      this.live_tvs = result;
	      
	      var default_live_tv=result[0];
 			
 		this.showTheLiveTv(default_live_tv.title,default_live_tv.embed_url)		

	    });


	    
	}









	showTheLiveTv(title,embed_url){

		if(embed_url){

			 this.sanitizer.bypassSecurityTrustResourceUrl(embed_url);
			//alert(embed_url);
			  var live_tv_embed_iframe=(document.querySelector('#live_tv_embed'));
			    (live_tv_embed_iframe as HTMLImageElement).src = embed_url;


			  var live_tv_current_title=(document.querySelector('.live_tv_current_title'));
			    (live_tv_current_title as HTMLImageElement).innerHTML = title;

			    
 

		}
 
	}





}
