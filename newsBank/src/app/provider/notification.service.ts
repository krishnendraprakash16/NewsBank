import { Injectable } from '@angular/core';
 

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})

export class NotificationService {


 


  constructor( ) { }




async addNotification(post_id){

  const ret = await Storage.get({ key: 'notifications' });
  let ntf = JSON.parse(ret.value);
 
  if(ntf==null){
               ntf={};
   }
           
   ntf[post_id]=post_id;

   console.log('Adding Notification : '+JSON.stringify(ntf));
      
 		  Storage.set({
			    key: 'notifications',
			    value: JSON.stringify(ntf)
			  });





 //for count_notification_received

  const ret2 = await Storage.get({ key: 'count_notification_received' });
  let cnr = JSON.parse(ret.value);
 
  if(cnr==null){
               cnr={};
   }
           
   cnr[post_id]=post_id;
      
 		  Storage.set({
			    key: 'count_notification_received',
			    value: JSON.stringify(cnr)
			  });


 ///






}



async count_notification_received(){
  const ret = await Storage.get({ key: 'count_notification_received' });
  let count_notification_received = JSON.parse(ret.value);
 
  if(count_notification_received==null){
             return 0;
   }
           
     var post_id_arr=Object.values(count_notification_received);

   return post_id_arr.length; 


}




}
