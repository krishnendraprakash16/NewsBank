import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdmobService} from '../provider/admob.service'


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

 skelton_list_items=null;
 latest_news=[];
 category=null;
  ads=null;

cp_id=null;

page=1;
 


  constructor(private activatedRoute: ActivatedRoute,private dataService : DataService,private admobService:AdmobService) {
           this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];

           this.admobService.showBannerAd();


           //this.ionViewDidEnter();



  }

     ngOnInit() {

     } 



doRefresh(event) {
   // console.log('Begin async operation');
     this.ionViewDidEnter();

    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  
  }

 ionViewDidEnter() {
    // Get the ID that was passed with the URL
    this.cp_id = this.activatedRoute.snapshot.paramMap.get('cp_id');
 
     
     this.get_latest_news_by_category(this.cp_id,this.page,"");
	     
     this.get_category_details(this.cp_id);

 
     this.dataService.get_custom_ad().subscribe(result => {
      this.ads = result;
    });


     this.admobService.checkThenshowInterstitialAd();

 
	
  }




get_latest_news_by_category(cp_id,page,event){
     this.dataService.get_latest_news_by_category(cp_id,this.page).subscribe((result:any) => {
       
      
        for (let i = 0; i < result.data.length; i++) {
          this.latest_news.push(result.data[i]);
        }
       
       //console.log(this.latest_news);

       if(event){
           event.target.complete();
  

      }



    });
}





 doInfinite(event) {
     this.page++;
 
     this.get_latest_news_by_category(this.cp_id,this.page,event);
  
  }



get_category_details(cp_id){
     this.dataService.get_category_details(cp_id).subscribe(result => {
       this.category = result;
         
      


    });
}




}
