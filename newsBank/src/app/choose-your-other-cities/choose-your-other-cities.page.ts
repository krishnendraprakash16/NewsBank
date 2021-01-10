import { DataService } from './../services/data.service';

import { Component, OnInit } from '@angular/core';

import { Router  } from '@angular/router';
import * as $ from "jquery";

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;



@Component({
  selector: 'app-choose-your-other-cities',
  templateUrl: './choose-your-other-cities.page.html',
  styleUrls: ['./choose-your-other-cities.page.scss'],
})
export class ChooseYourOtherCitiesPage implements OnInit {

 
user_district=null;

 user_other_districts=[];
 
 districts=null;

  constructor(public router: Router,private dataService : DataService) {
    this.ionViewDidEnter();
    
   }

  ngOnInit() {

     // Storage.remove({ key: 'user_other_districts' });  

    
   this.dataService.get_districts(null,'choose').subscribe(result => {
        this.districts = result;
    });


   


  }

  ionViewDidEnter(){

   this.get_user_district();
 
    //alert(get_user_distict);
    this.get_user_other_districts();


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

    //this.user_other_districts.push([did,title]);
  	 this.user_other_districts[did]=title;
   
  //remove null
             let temp = [];

            for(let i of this.user_other_districts)
                i && temp.push(i); // copy each non-empty value to the 'temp' array

            this.user_other_districts = temp;
            ///


//unique
this.user_other_districts = Array.from(new Set(this.user_other_districts))

 

    this.check_user_other_district(did).then((result) => {
        
         if(!result){
          
    		  $('.user_other_districts_container').append('<span class="badge badge1 badge-light district_item_'+did+' ">'+title+' <button onclick="remove_district('+did+')"> X </button> </span>');
	
        }

     });
    
    //to remove null values



	console.log("user_other_districts"+ JSON.stringify(this.user_other_districts));
  return false;


  }





  remove_district(did){
  	$('.district_item_'+did).hide();
 	
	 ///
   // let arr = [1, 2, 3, 4, 5, 3,"अंबेडकर नगर","अमरोहा","आगरा","अलीगढ़","आजमगढ़","उन्नाव","कन्नौज","औरैया","कासगंज"];

    this.user_other_districts = this.user_other_districts.filter(item => item !== did)



	console.log( this.user_other_districts);

  }




  save( ){

   
      console.log('AA'+ JSON.stringify(this.user_other_districts));
  
	     this.updateOtherDistrict('add');

	   // console.log(this.user_other_districts);

	   
     //becasue newly added districts not refreshing 
     this.router.navigate(['/my-city']);


  }








       async updateOtherDistrict(type){
                 
          //console.log(JSON.stringify(this.user_other_districts)); 


			// to empty storage , do not use it becasue it delete other storate too like users district added in storage
			//await Storage.clear();	 

			//use below to empty storage by key

		  // await Storage.remove({ key: 'user_other_districts' });	return false;

           const ret = await Storage.get({ key: 'user_other_districts' });
		       let uod = JSON.parse(ret.value);
 
          //alert(JSON.stringify(uod)); 

           if(uod==null){
           		uod=[];
           }
          
          if(type=='add'){




            //remove null
             let temp = [];

            for(let i of this.user_other_districts)
                i && temp.push(i); // copy each non-empty value to the 'temp' array

            this.user_other_districts = temp;
            ///



          	 uod=this.user_other_districts;

          }else{

//           delete uod[did];

          }

         
 
          // alert(JSON.stringify(uod)); 

 
        

		   Storage.set({
			    key: 'user_other_districts',
			    value: JSON.stringify(uod)
			  });

		           

       


  }

 



    async check_user_other_district(did){
	     
	    const ret = await Storage.get({ key: 'user_other_districts' });
		   let uod = JSON.parse(ret.value);

          if(uod==null){
               uod=[];
           }
	    // alert(JSON.stringify(uod));

	 
	    if(did in uod){
	    	//alert('yes');
	       return true;
	    }else{
	    	//alert('no');
	       return false;

	    }
	 

    
  }




async get_user_other_districts() {
  
   const ret = await Storage.get({ key: 'user_other_districts' });
   var bm = JSON.parse(ret.value);

   if(bm==null){
   	 this.user_other_districts = [];
     return false;
   }
 
 
   var did_arr=Object.values(bm);
    this.user_other_districts = did_arr;
   
   //console.log("User Other Districts Saved arr : "+this.user_other_districts); 
     
    //this.user_other_districts_temp=did_arr;

   //alert(this.user_other_districts);
    //alert(JSON.stringify(bm));



   


  //  alert(user_d.title);
   
}


 


}
