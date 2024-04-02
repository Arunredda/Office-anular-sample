import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

studenList: any []=[];

 toc:String| any
  constructor(private studentserviceService: StudentserviceService){}

  ngOnInit(): void {
    debugger
    this.toc= sessionStorage.getItem("jwbTocken")
     console.log("StudentList------"+this.toc)
    this.studentserviceService.getStudentList().subscribe((data =>{
      this.studenList=data;
      console.log(this.studenList)
    }));
  }

}


