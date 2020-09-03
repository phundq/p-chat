import { User } from './../model/user.i';
import { createAction, props } from '@ngrx/store';

export enum EUser {
    GET_ALL = "[USER] get all",
    GET_ALL_SUCESS = "[USER] get all success",
    GET_ALL_FAIL = "[USER] get all fail",
}

export const getAllUser = createAction(
    EUser.GET_ALL
);
export const getAllUserSuccess = createAction(
    EUser.GET_ALL_SUCESS,
    props<{users: User[]}>()
);
export const getAllUserFail = createAction(
    EUser.GET_ALL_FAIL,
    props<{message: string}>()
);