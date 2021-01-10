import { DataService } from './../services/data.service';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

 
 import { DomSanitizer } from '@angular/platform-browser';

 
 
 


@Component({
  selector: 'app-news-world-details',
  templateUrl: './news-world-details.page.html',
  styleUrls: ['./news-world-details.page.scss'],
})
export class NewsWorldDetailsPage implements OnInit {

item=null;
  nw_id=null; 

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService : DataService,
    public sanitizer: DomSanitizer,
   ) {
      
   }


   ngOnInit() {
    // Get the ID that was passed with the URL
    this.nw_id = this.activatedRoute.snapshot.paramMap.get('nw_id');
 
     
    this.dataService.news_world_details(this.nw_id).subscribe(result => {
      this.item = result;
    });

      
	
  }




    ionViewWillEnter(){
     // alert(this.check_bookmarks(this.post_id));
    
      
        
    }



  reload_page(){
    window.location.reload();
  }

 

 
 




}
