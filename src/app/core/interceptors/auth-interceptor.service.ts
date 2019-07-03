import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
//import { HttpClient, HttpInterceptor } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  constructor(private authService: AuthService) { } 
  intercept(req, next) {
    //console.log(this.authService.authGetToken())

    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.authService.authGetToken()
      }
    })
    return next.handle(tokenizeReq);
  }
}
