import { DataService } from '../services/data.service';

import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as $ from "jquery";



@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.page.html',
  styleUrls: ['./basic-pages.page.scss'],
})
export class BasicPagesPage implements OnInit {

 bid=null;
oid=null;

page=null;

tid=null;
api_token=null;


  constructor( 
  	    private activatedRoute: ActivatedRoute,
   		private dataService : DataService,
        private router: Router,
         public loadingController: LoadingController
          ) { 

	   



  }


 async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  ngOnInit() {
      // this.presentLoading();
  	    this.bid = this.activatedRoute.snapshot.paramMap.get('bid');

  	   	this.get_basic_page(this.bid);

  }





   get_basic_page(bid) {
 
 
      this.dataService.get_basic_page(bid).subscribe(result => {
      this.page=result;
 
 
    });
	 


  }







 









 


}
