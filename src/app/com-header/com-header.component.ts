import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-header',
  templateUrl: './com-header.component.html',
  styleUrls: ['./com-header.component.css']
})
export class ComHeaderComponent implements OnInit{


  role:string | any;
  ngOnInit(): void {
    this.role=sessionStorage.getItem("role");
    console.log("ROLE"+this.role)
    this.reloadData();

    
  }
  reloadData() {
    throw new Error('Method not implemented.');
  }

  

}
