import { User } from './../model/user.i';
import { createReducer, on } from '@ngrx/store';
import * as AuthAction from '../action/auth.action';
export interface AuthState{
    user?: User,
    isLoading: boolean,
    errorMessage?: string; 
    isLoginSuccess?: boolean;
}

const initAuthState: AuthState = {
    isLoading: false
}

export const authReducer = createReducer<AuthState>(
    initAuthState,
    on(AuthAction.login, state => ({...state, isLoading: true})),
    on(AuthAction.loginSuccess, (state, { user}) => ({...state, isLoading: false, user: user, isLoginSuccess: true})),
    on(AuthAction.loginFail, (state,{message}) => ({...state, isLoading: false, errorMessage: message})),
    on(AuthAction.logout, (state) => ({...state, isLoginSuccess: undefined, user: undefined})),
    );