import { Friend } from './../model/user.i';
import { createAction, props } from '@ngrx/store';

export enum EChat {
    CHANGE_CONVERSATION_TO = "[CHAT] change friend to conversation ...",

}

export const changeConversationTo = createAction(
    EChat.CHANGE_CONVERSATION_TO,
    props<{ friend: Friend}>()
);
