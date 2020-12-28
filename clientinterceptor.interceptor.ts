import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import{ catchError} from 'rxjs/operators';

@Injectable()
export class ClientinterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
   request=request.clone({
     setHeaders:{
       token:`TEST TOKEN`
     }
   });
   //return next.handle(request)

    return next.handle(request).pipe(
      catchError(err => { 
        console.log(err)

        if(err.status === 404)
        {
          alert('its 401')
        }
        else if(err.status === 401)
        {
          alert('its 404')
        }
        return throwError('This is an error');
        
      }
    ))
    }

  }
