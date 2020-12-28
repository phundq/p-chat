import { of } from 'rxjs';
import { createAction, props } from '@ngrx/store';
import { AccessToken, User } from './../model/user.i';

export enum EAuth {
    LOGIN = "[AUTH] login ...",
    LOGIN_SUCCESS = "[AUTH] login success",
    LOGIN_FAIL = "[AUTH] login fail",
    LOGOUT = "[AUTH] logout",

}

export const login = createAction(
    EAuth.LOGIN,
    props<{ username: string, password: string }>()
);
export const loginSuccess = createAction(
    EAuth.LOGIN_SUCCESS,
    props<{ user: User, accessToken: AccessToken }>()
);
export const loginFail = createAction(
    EAuth.LOGIN_FAIL,
    props<{ message: string }>()
);
export const logout = createAction(
    EAuth.LOGOUT
);

