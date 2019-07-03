import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AuthChildRoutingModule } from './auth-routing.module';
import { Store } from '@ngrx/store'

import { StoreModule } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs';

import { SharedModule } from '../shared/shared.module'
import { LoginComponent } from './login/login.component';

export const ngAuthModulesArgs = {
  declarations: [
    AuthComponent,
    LoginComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthChildRoutingModule,
    CommonModule,

    SharedModule,    

    StoreModule
  ],
  providers: [
    Store
  ]
}



@NgModule(ngAuthModulesArgs)
export class AuthModule { }
