import { AccessToken } from './../model/user.i';
import { renewToken } from './../action/auth.action';
import { getAuthFeature, getAutToken, getIsLoading, getIsLoginFail, getIsLoginSuccess, getUser, getFriends } from './../selector/auth.selector';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthAction from '../action/auth.action';

@Injectable({
    providedIn: 'root'
})
export class AuthStoreFacade {
    constructor(private store: Store) { }

    login(username: string, password: string) {
        this.store.dispatch(AuthAction.login({ username: username, password: password }));
    }

    logout() {
        this.store.dispatch(AuthAction.logout());
    }

    renewToken(accessToken: AccessToken) {
        this.store.dispatch(AuthAction.renewToken({ accessToken }))
    }


    selectAuthFeature() {
        return this.store.select(getAuthFeature);
    }

    selectIsLoading() {
        return this.store.select(getIsLoading);
    }
    selectIsLoginSuccess() {
        return this.store.select(getIsLoginSuccess);
    }
    selectIsLoginFail() {
        return this.store.select(getIsLoginFail);
    }
    selectUser() {
        return this.store.select(getUser);
    }
    selectAuthToken() {
        return this.store.select(getAutToken);
    }

    selectFriends() {
        return this.store.select(getFriends);
    }
}