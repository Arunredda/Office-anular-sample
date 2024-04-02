import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employeebo } from '../employeebo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-employe-list',
  templateUrl: './com-employe-list.component.html',
  styleUrls: ['./com-employe-list.component.css']
})
export class ComEmployeListComponent  implements OnInit{

  employe : any []=[];

   emploe: any;

   edit:boolean | undefined;
   employeforms: FormGroup | any;

  constructor(private empService: EmployeeserviceService,private fb:FormBuilder, private rout:Router){
    this.getEmpoyeList();
  }
  ngOnInit(): void {
   this.employeforms=this.fb.group({
    empName:['',[Validators.required]],
    empEmailID:[''],
    empDesignation:[''],
    empLocation:[''],
    empMobileNumber:['']
    
   })
  }

  nams:[]=[];

  toc:String | any

  getEmpoyeList(){
    debugger;
    this.edit=false;
    this.empService.getEmployeList().subscribe( (data) =>{
      console.log(data);
         this.employe=data;


        

        // this.toc= localStorage.getItem("jwbTocken")
        //console.log(this.toc)
    },
    (error) =>{
      
    })
  }
    
  editEmploye(id:number){
    console.log(id);

    this.empService.editEmploye(id).subscribe (
      (data =>{
        this.edit=true
         this.emploe=data;
         console.log(this.emploe);
        

      }
    )


    );
  }


  eployeUpdatebo: Employeebo=new Employeebo();
  update(id:number){

    console.log("ssss"+id)

    this.eployeUpdatebo.id=id;
    this.eployeUpdatebo.empName=this.employeforms.value.empName;
    this.eployeUpdatebo.empEmailID=this.employeforms.value.empEmailID;
    this.eployeUpdatebo.empDesignation=this.employeforms.value.empDesignation;
    this.eployeUpdatebo.empLocation=this.employeforms.value.empLocation;
    this.eployeUpdatebo.empMobileNumber=this.employeforms.value.empMobileNumber;



    this.empService.updateEmploye(this.eployeUpdatebo).subscribe(
      (data) =>{
        this.getEmpoyeList();
        
    },
    (error) =>{
    console.log("error"+error)
    }
    )
  }

  deleteEmploye(id:number){
     this.empService.deleteEmploye(id).subscribe(
      (data)=>{
        this.getEmpoyeList();
     })
  }
 

}
