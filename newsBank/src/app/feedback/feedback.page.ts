import { DataService } from '../services/data.service';

import { Component,ViewChild,OnInit, Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
 
 import {Validators, FormBuilder,FormControl, FormGroup } from '@angular/forms';

import {ToastController } from '@ionic/angular';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
 
  
  update_response=null;

 
  public myForm : FormGroup;


  

constructor(
        public toastController: ToastController,
        private activatedRoute: ActivatedRoute,
        private dataService : DataService,
        private router: Router,
        public formBuilder: FormBuilder,
     
        ) { 

		 
	  

         this.myForm = this.formBuilder.group({
            name: ["", Validators.required],
            message: ["", Validators.required],
           
          });
   
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

    




   submitFeedback() {
     //console.log(this.myForm.value);


     if(!this.myForm.valid){
       this.presentToast('Please enter all required fields','danger');

        return false;
     }

 
     (<HTMLElement>document.querySelector('.loader_submit_btn')).style.display="block";
(<HTMLElement>document.querySelector('#btn_submit')).setAttribute('disabled','');

 

 
    this.dataService.submit_feedback_form(this.myForm.value).subscribe((res) => {
 
      this.update_response=res;
      var status=this.update_response.status;
      var message=this.update_response.message;

       (<HTMLElement>document.querySelector('.loader_submit_btn')).style.display="none";
		(<HTMLElement>document.querySelector('#btn_submit')).removeAttribute('disabled');

      if(status==1){

      	    (<HTMLInputElement>document.querySelector('.name')).value="";
      	    (<HTMLInputElement>document.querySelector('.message')).value="";

       	   this.myForm = this.formBuilder.group({
            name: ["", Validators.required],
            message: ["", Validators.required],
           
          });

        this.presentToast(message,'success');

          //this.router.navigate(['/dashboard']);
          

      }else{
        this.presentToast(message,'danger');
      }


    });
	 


  }






}
