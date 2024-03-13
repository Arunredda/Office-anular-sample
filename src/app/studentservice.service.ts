import { Injectable } from '@angular/core';
import { StudenBO } from './studen-bo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/assets/append';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {


  createStudent(studentBO: StudenBO):Observable<any> {
   return this.http.post(baseUrl.baseUrls+"creatstuden", studentBO);
  }

  constructor( private http:HttpClient) { }
}
