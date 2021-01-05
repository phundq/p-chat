import { createReducer, on } from '@ngrx/store';
import * as ChatAction from '../action/chat.action';
import { Friend } from './../model/user.i';
export interface ChatState {
    friend?: Friend,
}

const initChatState: ChatState = {

}

export const chatReducer = createReducer<ChatState>(
    initChatState,
    on(ChatAction.changeConversationTo, (state, { friend }) => ({ ...state, friend: friend })),
);