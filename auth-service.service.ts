import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  

  constructor() { }
  public isAuthenticated():boolean{
    //const token=parseInt(localStorage.getItem('isUserLoggedIn'));
    //if(token===0)
   // {
      return localStorage.getItem('isUserLoggedIn')=='1';
   // }
   // return true;
  }
}
