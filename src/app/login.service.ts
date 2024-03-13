import { Injectable } from '@angular/core';
import { Loginbo } from './loginbo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/assets/append';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  checkLogin(loginbo: Loginbo):Observable<any> {
    return this.http.post(baseUrl.baseUrls+'checkLogin', loginbo)
  }

  constructor(private http:HttpClient) { }
}
