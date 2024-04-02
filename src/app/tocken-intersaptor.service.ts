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

    //const  tockens= sessionStorage.getItem("jwbTocken");

    const  tockens= localStorage.getItem("jwbTocken");

console.log("my HttpInterceptor----- "+tockens)
debugger;
req = req.clone({
  
      setHeaders: {
        
        Authorization: `Bearer ${tockens}` ,
        applicatoin:`Office`
      },

      //passing adding value in interseptor
      // body: {
        
      //   id: '10',
      //   userNamess:'HR@gmail.com'
      // }

      //params: req.params.set('paramName', 'paramValue10')

    })

    // console.log("new ------------ "+jwbtocken.params.get)

    return next.handle(req);

  }
}
