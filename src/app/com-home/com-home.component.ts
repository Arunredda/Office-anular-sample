import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-home',
  templateUrl: './com-home.component.html',
  styleUrls: ['./com-home.component.css']
//   template: `
//   <h1>Angular Lifecycle Hooks Example</h1>
//   <p>{{ message }}</p>
// `
})
export class ComHomeComponent  implements OnInit, OnChanges{
  message: string = '';


  formGroup:FormGroup =new FormGroup({});

  constructor(private fb:FormBuilder, private router:Router){
    console.log("constructor")
  }

  ngOnInit(): void {

       localStorage.removeItem("jwbTocken")

    console.log("ngOnInit")
  }

  ngOnChanges() : void{
    console.log('ngOnChanges called');
    this.message = 'ngOnInit called';
  }








  titel="Welcome to STG Infotech";


  employeName="Employe Name"
  disabled=true;

  saves():any{
   this.employeName="siva";
   this.disabled=false;
  }



  PassCTC(){
    alert("arun");

    this.router.navigate(['/com', "10"])
  }

  messageToChild: string = "Hello Child!";


 // userName: string = 'John Doe';
}
