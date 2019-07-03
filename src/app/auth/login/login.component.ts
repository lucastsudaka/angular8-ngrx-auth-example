import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store'
import { AppState } from './../../core/store/AppState';
import { User } from './../../shared/models/user.model';
import * as AuthActions from './../../core/store/auth/auth.action'
 
import { Router } from '@angular/router';


import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authUser: any;
  authUser$: Subscription

  users$: Observable<User[]>;
  isSubmited: boolean;
  formData: FormGroup;
  formData$: Subscription;
  constructor(private _store: Store<AppState>, private _router: Router, private _fb: FormBuilder) {
    this.isSubmited = false;
    this.formData = this._fb.group({
      email : ['', Validators.compose([Validators.required,  Validators.email])],
      password : ['', Validators.compose([Validators.required, Validators.minLength(5)])] 
    });
    this.authUser$ = _store.select('authUser').subscribe((data) => {
      this.authUser = data;
      // in 
      if(data.is_authenticated) {
        this._router.navigate(['/dashboard']);
      }
    });


  }
  log(d) {
    console.log(d);
  }
  // enviando dados de login do form
  onSubmit(): void {
    const payload = {
      email: this.formData.value.email, 
      password: this.formData.value.password
    }
    this.isSubmited = true;
    this._store.dispatch(new AuthActions.AuthLogin(payload));
  }


  //// LifeCycles
  ngOnInit() {
    this.formData$ = this.formData.valueChanges.subscribe((data)=>{
       console.log('data',data);
    });    
  }
  ngOnDestroy()	{
   if(this.formData$) {  this.formData$.unsubscribe(); }
    this.authUser$.unsubscribe();
    console.log('destroy login component!');
  }

}
