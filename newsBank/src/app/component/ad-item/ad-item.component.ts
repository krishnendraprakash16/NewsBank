import {NgModule, Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.scss'],
})
export class AdItemComponent implements OnInit {

  @Input() ad;
  constructor() { }

  ngOnInit() {}



   custom_ad_modal(img){
 
     (<HTMLElement>document.querySelector('.custom_ad_modal_body')).innerHTML="<img src='"+img+"' class='img-fluid'>";

     return false;
    
  }


}
