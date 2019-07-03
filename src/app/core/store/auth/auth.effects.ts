import { UserInterface } from './../../../shared/models/user.model';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action }  from '@ngrx/store'

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, flatMap } from "rxjs/operators"

import * as authActions from './auth.action'
import { AuthService } from './../../services/auth.service';


@Injectable()
export class AuthEffects {
    constructor(
        private _actions$: Actions,
        private _AuthService: AuthService
    ) { }
    
    /* *
    *   A API não fornece uma real auth por token (bearer Token), estamos 
    *   apenas simulando este processo
    * 
    * */
    @Effect()
    login$: Observable<Action> = this._actions$.pipe( // pipe function permite criar uma chain de operations para criar uma nova observablçe
        ofType<authActions.AuthLogin>(authActions.AUTH_TYPES.LOGIN),  // tipo da chamada
            map(action => action.payload),
            switchMap(payload => this._AuthService.authLogin(payload)),
            switchMap((res) => {
                this._AuthService.authSetToken(res.token);
                return  [    
                    new authActions.AuthByToken(res.token),
                    new authActions.AuthLoginSuccess(res)
                ]
            }), catchError((err: any) => {   
                    console.log('error',err)
                    return  of(new authActions.AuthLoginFail(err))
            })
    );  

    /* *
    *   Executamos este effect após o form de login ser enviado e quando a página recarregada.
    *   Aqui garantimos que a sessão seja persistente. Utilizando o service  
    *   
    *  */

    @Effect()        
    authByToken$ : Observable<Action> = this._actions$.pipe(
        ofType<authActions.AuthByToken>( authActions.AUTH_TYPES.AUTH_BY_TOKEN),  // tipo da chamada
            mergeMap((action: authActions.AuthByToken) => {   
                return   this._AuthService.authGetUsersByToken(action.payload).pipe(
                        map((res: any) =>  {   
                            this._AuthService.authSetCurrentUser(res);                                                
                            return new authActions.AuthSetCurrentUser(res)                      
                        }),
                        catchError((err: any) => {   
                            console.log('error', err);
                            return  of(new authActions.AuthLoginFail(err))
                        })
                    )
                }
        ),        
    );  
   

}