import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { AuthState } from '../reducer/auth.reducer';

export const authFeature = (state: AppState) => state.auth;

export const getAuthFeature = createSelector(authFeature, (state: AuthState) => state);
export const getAutToken = createSelector(authFeature, (state: AuthState) => state.accessToken);