import { loginSuccess } from './../action/auth.action';
import { createReducer, on } from '@ngrx/store';
import * as AuthAction from '../action/auth.action';
import { AccessToken, User } from './../model/user.i';
export interface AuthState {
    user?: User,
    isLoading: boolean,
    errorMessage?: string;
    isLoginSuccess?: boolean;
    isLoginFail?: boolean;
    accessToken?: AccessToken;
}

const initAuthState: AuthState = {
    isLoading: false
}

export const authReducer = createReducer<AuthState>(
    initAuthState,
    on(AuthAction.login, state => ({ ...state, isLoading: true, isLoginFail: false, loginSuccess: false })),
    on(AuthAction.loginSuccess, (state, { user, accessToken }) => ({ ...state, isLoading: false, user: user, accessToken: accessToken, isLoginSuccess: true, isLoginFail: false })),
    on(AuthAction.loginFail, (state, { message }) => ({ ...state, isLoading: false, errorMessage: message, loginSuccess: false, isLoginFail: true })),
    on(AuthAction.logout, (state) => ({ ...state, isLoginSuccess: undefined, isLoginFail: undefined, user: undefined })),
);