import { DataService } from '../services/data.service';

import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { IonRouterOutlet,Platform } from '@ionic/angular';

import * as $ from "jquery";
import {  Plugins,  Capacitor } from '@capacitor/core';

 const { App } = Plugins;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  
 bid=null;
 oid=null;
 
 page=null;
 home_intro_image=null;
 home_intro_text=null;
 tid=null;
 api_token=null;
 
 
   constructor( 
         private activatedRoute: ActivatedRoute,
        private dataService : DataService,
         private router: Router,
          public loadingController: LoadingController,
          public sanitizer: DomSanitizer,
          public platform: Platform,


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
       this.get_basic_page(3);
       this.get_welcome_screen_text(4);

       setTimeout(()=>{
        
       // this.router.navigate(['/home']);
       // this.router.navigateByUrl('/home', { skipLocationChange: true });
       this.router.navigateByUrl('/home', { replaceUrl: true }) 

       // window.location.href="/home";

       },2200);
  
   }
 
 
 
 

   ionViewDidEnter(){
     
    
   
 
  
    
	}

 
    get_basic_page(bid) {
  
  
       this.dataService.get_basic_page(bid).subscribe(result => {
       this.page=result;
       this.home_intro_image=this.page.body;

  
  
     });
    
 
 
   }
 
 
 
 
 
   get_welcome_screen_text(bid) {
  
  
    this.dataService.get_basic_page(bid).subscribe(result => {
    this.page=result;
    this.home_intro_text=this.page.body;



  });
 


}

 
  
 
 
 
 

}
