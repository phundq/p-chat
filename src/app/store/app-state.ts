import { UserState, userReducer } from './reducer/user.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './reducer/auth.reducer';
export interface AppState{
    user: UserState,
    auth: AuthState
}
export const appReducer: ActionReducerMap<AppState> = {
    user: userReducer,
    auth: authReducer
}