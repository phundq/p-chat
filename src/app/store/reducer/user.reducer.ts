import { User } from './../model/user.i';
import { EUser } from '../action/user.action';
import { Action, props } from '@ngrx/store';
export interface UserState{
    users?: User[],
    currentUser?: User,
    isLoading: boolean,
    errorMessage?: string; 
}

const initUserState: UserState = {
    isLoading: false
}

export function userReducer(state = initUserState, action: Action): UserState{
    switch(action.type){
        case EUser.GET_ALL: return {...state, isLoading: true};
        case EUser.GET_ALL_SUCESS: return {...state, isLoading: true};
        default: return state;
    }
}