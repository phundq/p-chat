import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { CommonState } from '../reducer/common.reducer';

export const commonFeature = (state: AppState) => state.common;

export const getCommonFeature = createSelector(commonFeature, (state: CommonState) => state);
export const isActivateChatList = createSelector(commonFeature, (state: CommonState) => state.isActiveChatList);
export const isMobile = createSelector(commonFeature, (state: CommonState) => state.isMobile);