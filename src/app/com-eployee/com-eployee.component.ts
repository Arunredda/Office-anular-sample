import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Employeebo } from '../employeebo';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-eployee',
  templateUrl: './com-eployee.component.html',
  styleUrls: ['./com-eployee.component.css']
})
export class ComEployeeComponent implements OnInit{

  employeforms: FormGroup | any;


  employeebo:Employeebo =new Employeebo();

  getEmp:Employeebo=new Employeebo();



  ngOnInit(): void {    
  this.employeforms=new FormGroup({
    empName:new FormControl(),
    empEmailID:new FormControl(),    
    empDesignation:new FormControl(),
    empLocation:new FormControl(),
    empMobileNumber:new FormControl()
  });
  } 

   

  //datas:string | undefined;
  submit(){
    // alert("sdcsazdc")
  console.log(this.employeforms.value);

  this.employeebo.empName=this.employeforms.value.empName;
  this.employeebo.empEmailID=this.employeforms.value.empEmailID;
  this.employeebo.empDesignation=this.employeforms.value.empDesignation;
  this.employeebo.empLocation=this.employeforms.value.empLocation;
  this.employeebo.empMobileNumber=this.employeforms.value.empMobileNumber;

  debugger;
  this.emploueService.saveEmployee(this.employeebo). 
  subscribe(
    
    (result) =>{
     
      this.getEmp.empEmailID=result.empEmailID;
         console.log("Arun"+this.getEmp.empEmailID);
         this.router.navigate(['employeList']);

  },
  (error) =>{
    console.log("Arunkumar"+error);
    this.router.navigate(['ceateEmploye']);
    
  }
  );
  
 
  //subscribe((datas: any) => console.log(datas), (error: any) => console.log(error));
   
   
  }

  constructor(private emploueService:EmployeeserviceService, private router:Router) { } 


}
