import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { ChatState } from './../reducer/chat.reducer';

export const chatFeature = (state: AppState) => state.chat;

export const getFriend = createSelector(chatFeature, (state: ChatState) => state.friend);