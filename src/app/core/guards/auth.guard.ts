import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _AuthService: AuthService) { }
  canActivate(): boolean{    
     
      if(this._AuthService.authGetToken()) {
        return true
      } 
      return false  
  }
}
