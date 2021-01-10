import { DataService } from './services/data.service';
 
import { Component, OnInit, Input } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
 import { Router,ActivatedRoute } from '@angular/router';

 import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertController } from '@ionic/angular';
import {NotificationService} from './provider/notification.service';

import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';


import { BackButtonEvent } from '@ionic/core';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
 
const { Storage } = Plugins;

 
 
import {
   PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor } from '@capacitor/core';

const { Device } = Plugins;

const { PushNotifications } = Plugins;

 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

 app_link="https://play.google.com/store/apps/details?id=com.newsbank.app";

fcm_token=null;


currentPageTitle = 'Dashboard';

  appPages = [
 
    {
      title: 'अपना फ़ीडबैक / सुझाव साझा करें ',
      url: '/feedback',
      icon: 'pencil'
    },
   /* {
      title: 'नोटिफिकेशन सेटिंग्स',
      url: '/notification-settings',
      icon: 'settings'
    },*/
    {
      title: 'नियम और शर्ते ',
      url: '/basic-pages/1',
      icon: 'clipboard'
    },
    {
      title: 'हमारे बारे में',
      url: '/basic-pages/2',
      icon: 'arrow-forward'
    } 
  ];


 share_title="अब एक ही ऍप में पाऐं सभी प्रमुख अखबारों, पोर्टलों के समाचार हिंदी में। लाईव टीवी, रेडियो, एफएम, बॉलीवुड के सदाबहार गाने लाईव। नोटिफिकेशन सहित, अभी डाउनलोड करें ";



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
       private socialSharing: SocialSharing,  
     private dataService : DataService,
     private notificationService: NotificationService,
     public router: Router,
     public alertController: AlertController,
     private firebaseDynamicLinks: FirebaseDynamicLinks
   ) {
    
    this.initializeApp();
  }


  initializeApp() {
    this.splashScreen.hide();

    this.platform.ready().then(() => {
      
      //this.router.navigate(['/welcome']);

     


     // this.notificationService.addNotification('109248');
      //this.notificationService.addNotification('109265');

    this.pushInit();


    // Handle the logic here after opening the app with the Dynamic link
    this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
      console.log(res);
      //alert(JSON.stringify(res));
      
      let link=res.deepLink;
      //alert(link);

      let post_id=this.getParameterByName('nid',link);
      //alert(post_id);
      this.router.navigate(['/news-details/'+post_id]);
    }, 
    (error:any) => {
      console.log(error);
      //alert(JSON.stringify(error));

    });

    /////////////



    });
  }






  pushInit(){


     if (this.platform.is('android')) {
       
 
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();

          // On success, we should be able to receive notifications
          PushNotifications.addListener('registration', 
            (token: PushNotificationToken) => {
              
              this.fcm_token=token.value;

              Device.getInfo().then(result=>{

                let device_info=result;
                this.addFCMToken(device_info.uuid,this.fcm_token);
                 
                  console.log('Push registration success, token: ' + token.value);

                  //alert('Push registration success, token: ' + token.value);


              });

 

            }
          );



          // Some issue with our setup and push will not work
          PushNotifications.addListener('registrationError', 
            (error: any) => {
              alert('Error on registration: ' + JSON.stringify(error));
            }
          );

          // Show us the notification payload if the app is open on our device
          PushNotifications.addListener('pushNotificationReceived', 
            (notification: PushNotification) => {
              //alert('Push received: ' + JSON.stringify(notification));
           
      //https://forum.ionicframework.com/t/how-to-receive-additional-data-for-push-notification-in-ionic2/60795/15
              let json = JSON.parse(JSON.stringify(notification));
              let data=json.data;

               let post_id=data.post_id;
               
               this.notificationService.addNotification(post_id);

               this.presentAlertConfirm(data.title,data.title,data.url);


            }
          );

          // Method called when tapping on a notification
          PushNotifications.addListener('pushNotificationActionPerformed', 
            (notification: PushNotificationActionPerformed) => {


              let json = JSON.parse(JSON.stringify(notification));
              console.log(json);

               let post_id=json.notification.data.post_id;
               this.notificationService.addNotification(post_id);

 
              let url=json.notification.data.url;
              this.router.navigate([url]);


            }
          );




      }



}




  addFCMToken(uuid,token){

        this.dataService.registerFCMToken(uuid,token).subscribe((res) => {          
      
    });
   

  }



async presentAlertConfirm(title,message,url) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: [
          {
          text: 'Open',
          handler: () => {
              this.router.navigate([url]);

          }
        },{
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async (blah) => {
            //console.log('नहि');
 
            

          }
        }
      ]
    });

    await alert.present();
  }

 socialShare(){


     
    var options = {
        message: this.share_title, // not supported on some apps (Facebook, Instagram)
        url:this.app_link,        
      };

      this.socialSharing.shareWithOptions(options);

  }




 openAppLink(){

     window.open(this.app_link,"_system");

  }


 exitApp(){
 //https://ionicframework.com/docs/developing/hardware-back-button#exiting-the-app
    App.exitApp();

 }





   getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


}
