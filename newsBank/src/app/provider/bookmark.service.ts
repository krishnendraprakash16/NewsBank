import { Injectable } from '@angular/core';


import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import * as $ from "jquery";


@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }


   bookmark_news(post_id){
   //alert(post_id);
    
      var icon=$('#btn_bookmark_news_'+post_id).find('ion-icon');
       
       //attribute 'name' not working on first time so, using attribute 'ng-reflect-name'
        //alert(icon.attr('ng-reflect-name'));
      
      if(icon.attr('ng-reflect-name')=='notifications-outline'){
         icon.attr('name','notifications');
         icon.attr('ng-reflect-name','notifications');

         this.updateBookmark(post_id,'add');      

      }else{
        icon.attr('name','notifications-outline');
        icon.attr('ng-reflect-name','notifications-outline');

        this.updateBookmark(post_id,'remove');      

      }

 
 
      return false;
 
    }



    	//this function called from new listing popup bookmark
       add_bookmark_news(post_id){
       	       this.updateBookmark(post_id,'add')

       }



       async updateBookmark(post_id,type){
          

			// to empty storage , do not use it becasue it delete other storate too like users district added in storage
			//await Storage.clear();	 

			//use below to empty storage by key

			// await Storage.remove({ key: 'bookmarks' });	

           const ret = await Storage.get({ key: 'bookmarks' });
		       var bm = JSON.parse(ret.value);
 
          // alert(JSON.stringify(bm)); 

           if(bm==null){
           		bm={};
           }
          
          if(type=='add'){

               bm[post_id]=post_id;
    	

          }else{

           delete bm[post_id];

          }

         
 
         //  alert(JSON.stringify(bm)); 

 
        

		   Storage.set({
			    key: 'bookmarks',
			    value: JSON.stringify(bm)
			  });

		           

       


  }



     async check_bookmarks(post_id){
	     
	    const ret = await Storage.get({ key: 'bookmarks' });
		   var bm = JSON.parse(ret.value);

          
	    // alert(JSON.stringify(bm));

	 
	    if(post_id in bm){
	    	//alert('yes');
	       return true;
	    }else{
	    	//alert('no');
	       return false;

	    }
	 

    
  }







}
