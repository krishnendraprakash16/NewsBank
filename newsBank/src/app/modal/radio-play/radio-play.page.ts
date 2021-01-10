import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-radio-play',
  templateUrl: './radio-play.page.html',
  styleUrls: ['./radio-play.page.scss'],
})
export class RadioPlayPage implements OnInit {
 
 @Input() title: string;
 @Input() rd_id: string;
 @Input() embed_url: string;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
  	

  	setTimeout(() => {
        
  		  		(<HTMLElement>document.querySelector('.spinner_radio_player')).style.display="none";


        }, 1500);


   

  }

}
