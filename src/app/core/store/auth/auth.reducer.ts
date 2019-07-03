import { User } from './../../../shared/models/user.model';
import { Action } from '@ngrx/store';
import * as AuthActions from './auth.action';
import { AuthService } from './../../services/auth.service';

const INITIAL_STATE: User = {
    id: null,
    email: null,
    is_authenticated: false
}


export function authReducer(state: User = INITIAL_STATE, action: any) {
   switch(action.type) {
    case AuthActions.AUTH_TYPES.LOGIN:
        console.log('login', action.payload);
        return state
    case AuthActions.AUTH_TYPES.LOGIN_SUCCESS: {       
        return {
            ...state,
            is_authenticated: true,
            error_message: null
        };
    } 
    case AuthActions.AUTH_TYPES.SET_CURRENT_USER: {       
        return {
            ...state,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            avatar: action.payload.last_name,
            is_authenticated: true,
            error_message: null
        };
    }
    case AuthActions.AUTH_TYPES.LOGIN_FAIL: {       
        return {
            ...state,
            is_authenticated: false,
            error_message: action.payload.error
        };
    }
    default: 
        return  state
    }   
}
