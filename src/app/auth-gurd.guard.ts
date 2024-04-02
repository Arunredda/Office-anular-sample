import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdGuard implements CanActivate {

  status:Boolean | any;

  constructor(private authServiceService:AuthServiceService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.status=this.authServiceService.isAuthonticate();
      console.log("canActivate"+ this.status)
    if(this.status){
      console.log("canActivate true"+this.status)
      return true;
    }
    else{
      console.log("canActivate false"+this.status)
        this.route.navigate(['/login']);
        return false;
    }
    
     
  }
  
}
