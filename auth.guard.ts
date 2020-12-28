import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import{AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(
     private router:Router,private auth:AuthServiceService
   ){}

  canActivate(): boolean{
                if(!this.auth.isAuthenticated())
                 {
                  this.router.navigate(['/Signin']);
                  console.log("navigated to signin");
                  return false;
                 }
                 else
                 {
                   console.log("true");
                   return true;
                 }
               }  
              }
               
               
                    
     
  
