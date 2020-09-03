import { UserState } from './../reducer/user.reducer';
import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';

export const userFeature = (state: AppState) => state.user;

export const getUserFeature = createSelector(userFeature, (state: UserState) => state);