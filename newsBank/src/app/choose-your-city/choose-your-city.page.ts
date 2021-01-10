import { DataService } from './../services/data.service';

import { Component, OnInit } from '@angular/core';

import { Router  } from '@angular/router';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Component({
  selector: 'app-choose-your-city',
  templateUrl: './choose-your-city.page.html',
  styleUrls: ['./choose-your-city.page.scss'],
})

export class ChooseYourCityPage implements OnInit {

user_district=null;

 districts=null;

  constructor(public router: Router,private dataService : DataService) { }

  ngOnInit() {

    
   this.dataService.get_districts(null,'choose').subscribe(result => {
        this.districts = result;
    });


  }

  ionViewWillEnter(){

   this.get_user_district();
 
    //alert(get_user_distict);
 

  }


async get_user_district() {
  const ret = await Storage.get({ key: 'user_distict' });
  const user_d = JSON.parse(ret.value);

  //alert(JSON.stringify(user_d));
    this.user_district=user_d?.title;

  //  alert(user_d.title);
   
}





  
  search(e){
 	
 	var keyword=e.target.value;

 	if(keyword && keyword.trim() !=''){
 		 this.dataService.get_districts(keyword,'choose').subscribe(result => {
	      this.districts = result;
	    });

 	}else{

 	 this.dataService.get_districts(null,'choose').subscribe(result => {
        this.districts = result;
      });  


   }

   

  }




  choose_district(did,title){
  	//alert(title);

	   Storage.set({
	    key: 'user_distict',
	    value: JSON.stringify({
	      id:did,
	      title:title
	    })

	  });


	   this.router.navigate(['/home']);


  }



}
