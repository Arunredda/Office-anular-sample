import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-home',
  templateUrl: './com-home.component.html',
  styleUrls: ['./com-home.component.css']
})
export class ComHomeComponent  implements OnInit{

  ngOnInit(): void {
    sessionStorage.removeItem("jwbTocken")
  }

  titel="Welcome to STG Infotech";
  employeName="Employe Name"
  disabled=true;

  saves():any{
   this.employeName="siva";
   this.disabled=false;
  }
}
