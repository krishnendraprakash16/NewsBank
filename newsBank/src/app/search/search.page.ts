import { DataService } from './../services/data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

 keyword=null;
 districts=null;
 skelton_list_items=null;
  ads=null;

latest_news=null;

  constructor(private dataService : DataService,) { 

        // this.skelton_list_items=[0,1,2,3,4,5,6,7,8,9];
        
 

  }


  ngOnInit() {


 
  }



  search(e){
 	 

  var loader=(<HTMLElement>document.querySelector('.loader'));



 	 this.keyword=e.target.value;

 	if(this.keyword && this.keyword.trim() !='' && this.keyword.length>=3){
 		
        loader.style.display='block';


    this.dataService.get_news_by_keyword(this.keyword,0,25).subscribe(result => {
        this.latest_news = result;
          loader.style.display='none';

    });

 
 
 	}else{

    
 this.latest_news = null;
  
   }

   
  }


 
 ionViewDidEnter() {
    
 
     this.dataService.get_custom_ad().subscribe(result => {
      this.ads = result;
    });

 
  
  }



}
