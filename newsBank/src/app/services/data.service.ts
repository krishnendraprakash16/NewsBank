import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

 

@Injectable({
  providedIn: 'root'
})
export class DataService {
	
    // private api_url = "http://localhost/jitesh/news_bank/api/";
    
  private api_url = "https://ingnewsbank.com/api/";
 	

  constructor(private http : HttpClient) { }
 

 // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  get_settings(group_of){
    return this.http.get(this.api_url+"get_settings?group_of="+group_of);
  }



   home_latest_news(){
    return this.http.get(this.api_url+"home_latest_news?take=5");
  }
  

   home_top_bar_news_category(){
    return this.http.get(this.api_url+"home_top_bar_news_category");
  }

  home_top_bar_news_of_category(cp_id,page){
    return this.http.get(this.api_url+"home_top_bar_news_of_category?cp_id="+cp_id+"&page="+page);
  }


   home_top_bar_news(page){
    return this.http.get(this.api_url+"home_top_bar_news?page="+page);
  }
  
  get_category_details(cp_id){
    return this.http.get(this.api_url+"get_category_details?cp_id="+cp_id);
  }


  get_latest_news_by_category(cp_id,page){
    return this.http.get(this.api_url+"get_latest_news_by_category?page="+page+"&cp_id="+cp_id);
  }
  
    get_news_by_keyword(keyword,skip,take){
    return this.http.get(this.api_url+"get_news_by_keyword?skip="+skip+"&take="+take+"&keyword="+keyword);
  }
  

  get_latest_news_by_district(did,page){
    return this.http.get(this.api_url+"get_latest_news_by_district?page="+page+"&did="+did);
  }
   
  
  get_district_news_by_name(district_name){
    return this.http.get(this.api_url+"get_district_news_by_name?district_name="+district_name);
  }
   
   
  //News details page 
   
   news_details(post_id) {
    return this.http.get(this.api_url+"news_details/"+post_id);
  }




   get_districts(keyword,mode) {
    return this.http.get(this.api_url+"get_districts?keyword="+keyword+"&mode="+mode);
  }


   get_live_tvs() {
    return this.http.get(this.api_url+"get_live_tvs");
  }
 


   get_category_radio() {
    return this.http.get(this.api_url+"get_category_radio");
  }


 get_news_world() {
    return this.http.get(this.api_url+"get_news_world");
  }


 
   news_world_details(nw_id) {
    return this.http.get(this.api_url+"news_world_details/"+nw_id);
  }

  get_news_gallery() {
    return this.http.get(this.api_url+"get_news_gallery");
  }



  trending_tags() {
    return this.http.get(this.api_url+"trending_tags");
  }


   get_latest_news_by_tags(t_id){
    return this.http.get(this.api_url+"get_latest_news_by_tags?skip=0&take=25&t_id="+t_id);
  }
   


    get_custom_ad(){
    return this.http.get(this.api_url+"get_custom_ad");
  }
   
   get_ad_of_district(did,type='id'){
    return this.http.get(this.api_url+"get_ad_of_district?take=25&did="+did+"&type="+type);
  }


//not using this 
    get_ad_of_category(cp_id){
    return this.http.get(this.api_url+"get_ad_of_category?take=25&cp_id="+cp_id);
  }
   
   


   get_news_by_post_ids(post_ids){
    return this.http.get(this.api_url+"get_news_by_post_ids?post_ids="+post_ids);
  }
   

  registerFCMToken(uuid,token){
   var value={
     uuid:uuid,
     token:token
   };


    return this.http.post(this.api_url+"register_fcm_token",value,this.httpOptions);
  }

  


  submit_feedback_form(value){
   
    return this.http.post(this.api_url+"submit_feedback_form",value,this.httpOptions);
  }



 get_basic_page(bid){
    return this.http.get(this.api_url+"get_basic_page?bid="+bid);
  }

}
