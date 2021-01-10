import { DataService } from './../services/data.service';

import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../provider/notification.service';

import { Router  } from '@angular/router';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

 
 trending_tags=null;
 count_notification_received=0;

  constructor(
              public router: Router,
              private dataService : DataService,
              private notificationService: NotificationService) 
              {

              }

  ngOnInit() {

    
   this.dataService.trending_tags().subscribe(result => {
        this.trending_tags = result;
    });


  }

  ionViewDidEnter(){
   
   
     this.notificationService.count_notification_received().then(result=>{
        this.count_notification_received=result;

     });
 

  } 





  
 


  


}
