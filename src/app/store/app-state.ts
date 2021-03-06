import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './reducer/auth.reducer';
import { chatReducer, ChatState } from './reducer/chat.reducer';
import { commonReducer, CommonState } from './reducer/common.reducer';
import { userReducer, UserState } from './reducer/user.reducer';
export interface AppState {
    user: UserState,
    auth: AuthState
    common: CommonState,
    chat: ChatState
}
export const appReducer: ActionReducerMap<AppState> = {
    user: userReducer,
    auth: authReducer,
    common: commonReducer,
    chat: chatReducer
}