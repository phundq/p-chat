import { createAction } from '@ngrx/store';

export enum EAuth {
    ACTIVATE_CHAT_LIST = "[COMMON] active chat list ...",
    DEACTIVATE_CHAT_LIST = "[COMMON] inactive chat list ...",
    ACTIVATE_MOBILE = "[COMMON] active mobile ...",
    DEACTIVATE_MOBILE = "[COMMON] inactive mobile ...",

}

export const activateChatList = createAction(
    EAuth.ACTIVATE_CHAT_LIST
);

export const deactivateChatList = createAction(
    EAuth.DEACTIVATE_CHAT_LIST
);

export const activateMobile = createAction(
    EAuth.ACTIVATE_MOBILE
);

export const deactivateMobile = createAction(
    EAuth.DEACTIVATE_MOBILE
);
