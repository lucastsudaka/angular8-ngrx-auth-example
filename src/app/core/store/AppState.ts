import { UserInterface } from './../../shared/models/user.model';

//reducers
import { authReducer } from './auth/auth.reducer'

//effects
import { AuthEffects } from './auth/auth.effects';

export interface AppState {
    readonly authUser: UserInterface;
}

export const AppReducers = {
    authUser: authReducer,

};
export const AppEffects = [AuthEffects]