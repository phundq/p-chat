import { getAllUser, getAllUserSuccess } from './../action/user.action';
import { User } from './../model/user.i';
import { createReducer, on } from '@ngrx/store';
import * as UserAction from '../action/user.action';
export interface UserState{
    users?: User[],
    currentUser?: User,
    isLoading: boolean,
    errorMessage?: string; 
    isLoginSuccess?: boolean;
}

const initUserState: UserState = {
    isLoading: false
}

export const userReducer = createReducer<UserState>(
    initUserState,
    on(UserAction.getAllUser, state => ({...state, isLoading: true})),
    on(UserAction.getAllUserSuccess, (state, { users}) => ({...state, isLoading: false, users: users, isLoginSuccess: true})),
    on(UserAction.getAllUserFail, (state,{message}) => ({...state, isLoading: false, errorMessage: message})),
    );