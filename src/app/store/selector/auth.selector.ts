import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { AuthState } from '../reducer/auth.reducer';

export const authFeature = (state: AppState) => state.auth;

export const getAuthFeature = createSelector(authFeature, (state: AuthState) => state);
export const getIsLoading = createSelector(authFeature, (state: AuthState) => state.isLoading);
export const getIsLoginSuccess = createSelector(authFeature, (state: AuthState) => state.isLoginSuccess);
export const getIsLoginFail = createSelector(authFeature, (state: AuthState) => state.isLoginFail);
export const getUser = createSelector(authFeature, (state: AuthState) => state.user);
export const getFriends = createSelector(authFeature, (state: AuthState) => state.user.friends);
export const getAutToken = createSelector(authFeature, (state: AuthState) => state.accessToken);