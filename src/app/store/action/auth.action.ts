import { User } from './../model/user.i';
import { createAction, props } from '@ngrx/store';

export enum EAuth {
    LOGIN = "[AUTH] login ...",
    LOGIN_SUCCESS = "[AUTH] login success",
    LOGIN_FAIL = "[AUTH] login fail",
    LOGOUT = "[AUTH] logout",

}

export const login = createAction(
    EAuth.LOGIN
);
export const loginSuccess = createAction(
    EAuth.LOGIN_SUCCESS,
    props<{ user: User }>()
);
export const loginFail = createAction(
    EAuth.LOGIN_FAIL,
    props<{message: string}>()
);
export const logout = createAction(
    EAuth.LOGOUT
);

