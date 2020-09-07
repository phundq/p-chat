import { UserState } from './../reducer/user.reducer';
import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducer/auth.reducer';

export const authFeature = (state: AppState) => state.auth;

export const getAuthFeature = createSelector(authFeature, (state: AuthState) => state);