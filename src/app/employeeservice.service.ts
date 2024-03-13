import { Injectable } from '@angular/core';
import { Employeebo } from './employeebo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/assets/append';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  deleteEmploye(id: number) :Observable<any>{
    return this.http.delete(baseUrl.baseUrls+'deleteEmploye/'+id);
  }

  updateEmploye(eployeUpdatebo: Employeebo):Observable<any> {
   return this.http.post(baseUrl.baseUrls+'updateEmploye',eployeUpdatebo);
  }


  editEmploye(id: number) : Observable<any>{
    return this.http.get(baseUrl.baseUrls+'editEmploye/'+id);
  }

  getEmployeList() : Observable<any>{
    return this.http.get(baseUrl.baseUrls+'getEmployeList');
  }
  saveEmployee(employeform: Employeebo) : Observable<any>  {
    return this.http.post(baseUrl.baseUrls+'createEmploye', employeform);
  }
 constructor(private http:HttpClient) { }
  // private baseUrl = 'http://localhost:8080/api/'; 
  
  
  // saveEmployee(student: object): Observable<object> { 
  //   console.log();
  //   return this.http.post(`${this.baseUrl}`+'createEmploye', student);   
  // }
 
}
