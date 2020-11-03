import { createReducer, on } from '@ngrx/store';
import * as CommonAction from '../action/common.action';
export interface CommonState {
    isActiveChatList?: boolean,
    isMobile?: boolean,
}

const initCommonState: CommonState = {
    isActiveChatList: true
}

export const commonReducer = createReducer<CommonState>(
    initCommonState,
    on(CommonAction.activateChatList, state => ({ ...state, isActiveChatList: true })),
    on(CommonAction.deactivateChatList, (state) => ({ ...state, isActiveChatList: false })),
    on(CommonAction.activateMobile, state => ({ ...state, isMobile: true })),
    on(CommonAction.deactivateMobile, (state) => ({ ...state, isMobile: false })),
);