import { DataService } from '../services/data.service';

import { Component,ViewChild,OnInit, Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
 
 import {Validators, FormBuilder,FormControl, FormGroup } from '@angular/forms';

import {ToastController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

 import {IonContent, IonSlides } from '@ionic/angular';

import * as $ from "jquery";


@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
})
export class NotificationSettingsPage implements OnInit {

 
 
user_other_districts_did_for_notification=[];
 notification_time_interval=null;
abc=true;
  public myForm : FormGroup;

 user_other_districts=null;

  

constructor(
        public toastController: ToastController,
        private activatedRoute: ActivatedRoute,
        private dataService : DataService,
        private router: Router,
        public formBuilder: FormBuilder,
     
        ) { 

		 
	  

         this.myForm = this.formBuilder.group({
            notification_time_interval: [this.notification_time_interval],
            
          });
   
	   }



 
ionViewDidEnter(){
	this.get_user_other_districts();
	this.get_user_other_districts_did_for_notification();
}


  async presentToast(msg,color) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 1000,
       // position: 'bottom',
       color:color
      });
      toast.present();
      }




  ngOnInit() {

 

  }

    




   async submitNotificationSettingForm() {
     //console.log(this.myForm.value);
     	this.notification_time_interval=$('.notification_time_interval').val();

     		//alert(notification_time_interval);
  
             var favorite = [];
 
             $.each($(".user_other_districts_did_for_notification:checked"), function(){
                favorite.push($(this).val());
            });


 			/*
			 const ret = await Storage.get({ key: 'user_other_districts_did_for_notification' });
		     let uodn = JSON.parse(ret.value);
 

           if(uodn==null){
           		uodn=[];
           }

           */
 

		  Storage.set({
		    key: 'notification_time_interval',
		    value: this.notification_time_interval
		  });


           	  this.user_other_districts_did_for_notification=favorite;

   	          //console.log(JSON.stringify(this.user_other_districts_did_for_notification)); 

		   Storage.set({
			    key: 'user_other_districts_did_for_notification',
			    value: JSON.stringify(this.user_other_districts_did_for_notification)
			  });



 	this.presentToast('Notification Setting Saved !','success');


  }






async get_user_other_districts() {
  

   

   const ret = await Storage.get({ key: 'user_other_districts' });
   var bm = JSON.parse(ret.value);

    
   var did_arr=Object.values(bm);
    this.user_other_districts = did_arr;

    
    //console.log("User Other Districts arr "+this.user_other_districts); 
    
    //this.user_other_districts_temp=did_arr;

   //alert(this.user_other_districts);
    //alert(JSON.stringify(bm));



   


  //  alert(user_d.title);
   
}






async get_user_other_districts_did_for_notification() {
  
   const ret = await Storage.get({ key: 'user_other_districts_did_for_notification' });
   var bm = JSON.parse(ret.value);

   if(bm==null){
   	 this.user_other_districts_did_for_notification = [];
     return false;
   }
 
 
   var did_arr=Object.values(bm);
    this.user_other_districts_did_for_notification = did_arr;
   
   console.log("user_other_districts_did_for_notification : "+this.user_other_districts_did_for_notification); 
     


  this.notification_time_interval=Storage.get({ key: 'notification_time_interval' }).then(result=>{

  	this.notification_time_interval=result;

	this.myForm = this.formBuilder.group({
	   notification_time_interval: [this.notification_time_interval.value]
	 });



  });
 
  //  alert(user_d.title);
   
}




}
