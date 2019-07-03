// Section 1 Imports
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { UserInterface, LoadUser } from './../../../shared/models/user.model';

// Section 2 Actions types
export const enum AUTH_TYPES {
    LOGIN   = '[LOGIN] Do',
    LOGIN_SUCCESS   = '[LOGIN] Success',
    LOGIN_FAIL = '[LOGIN] Fail',
    SET_CURRENT_USER = '[SET_CURRENT_USER] Set current user',
    AUTH_BY_TOKEN = '[AUTH] Auth by token'
  }

// Section 3 Actions
export class AuthLogin implements Action {
    readonly type = AUTH_TYPES.LOGIN
    constructor(public payload: any) {}
}
 
export class AuthLoginSuccess implements Action {
    readonly type = AUTH_TYPES.LOGIN_SUCCESS;  
    constructor(public payload: any) {}
}

export class AuthLoginFail implements Action {
    readonly type = AUTH_TYPES.LOGIN_FAIL;
    constructor(public payload: any) {}
}

export class AuthSetCurrentUser implements Action {
    readonly type = AUTH_TYPES.SET_CURRENT_USER
    constructor(public payload: any) {}
}

export class AuthByToken implements Action {
    readonly type = AUTH_TYPES.AUTH_BY_TOKEN
    constructor(public payload: string) { }
}

// Section 4 Exports
export type Actions = AuthLogin | AuthLoginFail | AuthLoginSuccess | AuthSetCurrentUser | AuthByToken