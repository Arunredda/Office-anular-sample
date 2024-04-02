import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-compont',
  templateUrl: './common-compont.component.html',
  styleUrls: ['./common-compont.component.css']
})
export class CommonCompontComponent implements OnInit{

  //@Input() message: String | undefined;

  constructor(private router:ActivatedRoute){}

     id : String |any;


  ngOnInit(): void {
   this.router.paramMap.subscribe( ref =>{
        this.id=ref.get("id");
        alert("Passing Router Parameter----" +this.id)
   })
    //this.id=this.router.snapshot.paramMap("id");
  }

}
