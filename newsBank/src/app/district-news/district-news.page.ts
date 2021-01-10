import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdmobService} from '../provider/admob.service'

@Component({
  selector: 'app-district-news',
  templateUrl: './district-news.page.html',
  styleUrls: ['./district-news.page.scss'],
})
export class DistrictNewsPage implements OnInit {

  
 skelton_list_items=null;
 latest_news=null;
 ads=null;

  constructor(private activatedRoute: ActivatedRoute,private dataService : DataService,private admobService:AdmobService) {
           this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];

             this.admobService.showBannerAd();
               this.ionViewDidEnter();
  }


  ngOnInit(){

  }



 ionViewDidEnter() {
    // Get the ID that was passed with the URL
    let did = this.activatedRoute.snapshot.paramMap.get('did');
 
     
    this.dataService.get_latest_news_by_district(did,1).subscribe(result => {
      this.latest_news = result;
    });
	

    this.dataService.get_ad_of_district(did).subscribe(result => {
      this.ads = result;
    });
  
	   this.admobService.checkThenshowInterstitialAd();

	
  }




}
