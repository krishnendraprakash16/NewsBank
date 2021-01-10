import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdmobService} from '../provider/admob.service'



@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.page.html',
  styleUrls: ['./tag-details.page.scss'],
})
export class TagDetailsPage implements OnInit {

 
 skelton_list_items=null;
 latest_news=null;

  constructor(private activatedRoute: ActivatedRoute,private dataService : DataService,private admobService:AdmobService) {
           this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];


            this.admobService.showBannerAd();


       this.ionViewDidEnter();

  }



  ngOnInit(){

  }




 ionViewDidEnter() {
    // Get the ID that was passed with the URL
    let t_id = this.activatedRoute.snapshot.paramMap.get('t_id');
 
     
    this.dataService.get_latest_news_by_tags(t_id).subscribe(result => {
      this.latest_news = result;
    });
	
	 
	
  }


}
