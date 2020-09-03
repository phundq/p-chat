import { UserState, userReducer } from './reducer/user.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState{
    user: UserState,
}
export const appReducer: ActionReducerMap<AppState> = {
    user: userReducer,
}