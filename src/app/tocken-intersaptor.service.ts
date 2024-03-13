import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespoceBO } from './respoce-bo';

@Injectable({
  providedIn: 'root'
})
export class TockenIntersaptorService implements HttpInterceptor {

   tocken = ''
   //const token:any
   


  // addTocken(respoceBO: RespoceBO) {
  //  this. tocken = respoceBO.jwbTocken
  //  console.log("TockenIntersaptorService ----------- " + this. tocken)
  // }

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const  tockens= sessionStorage.getItem("jwbTocken");

console.log("my----- "+tockens)

req = req.clone({

      setHeaders: {
        Authorization: `Bearer ${tockens}` 
      }

    })

    // console.log("new ------------ "+jwbtocken.params.get)

    return next.handle(req);

  }
}
