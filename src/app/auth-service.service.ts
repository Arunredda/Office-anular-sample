import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  tockens:String | any;


  constructor() { }

       isAuthonticate(){
        console.log("isAuthonticate")

          this.tockens= localStorage.getItem("jwbTocken");
          if(this.tockens!=null && this.tockens!=''){
            console.log("isAuthonticate true")
            return true;
          }
          console.log("isAuthonticate false")
            return false;
         
       }

}
