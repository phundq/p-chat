import { getAuthFeature, getAutToken } from './../selector/auth.selector';
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


    selectAuthFeature() {
        return this.store.select(getAuthFeature);
    }

    selectAuthToken() {
        return this.store.select(getAutToken);
    }


}