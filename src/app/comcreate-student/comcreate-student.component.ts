import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';
import { StudenBO } from '../studen-bo';

@Component({
  selector: 'app-comcreate-student',
  templateUrl: './comcreate-student.component.html',
  styleUrls: ['./comcreate-student.component.css']
})
export class ComcreateStudentComponent implements OnInit {


  studentBO: StudenBO=new StudenBO();

  studentForm: FormGroup =new FormGroup({});

  constructor(private fb:FormBuilder, private studentserviceService:StudentserviceService){}

  ngOnInit(): void {
    this.studentForm=this.fb.group({
      studentName: [''],
      emailId: [''],
      lastName: ['']

    })
  }


  createStudent(){

    this.studentBO=this.studentForm.value;
        console.log(this.studentBO)

        this.studentserviceService.createStudent(this.studentBO).subscribe(
          (data =>{

        })
        
        )
  }

}
