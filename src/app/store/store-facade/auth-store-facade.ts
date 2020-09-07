import { getAuthFeature } from './../selector/auth.selector';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthAction from '../action/auth.action';

@Injectable({
    providedIn: 'root'
})
export class AuthStoreFacade {
    constructor(private store: Store) { }

    login() {
        this.store.dispatch(AuthAction.login());
    }

    logout(){
        this.store.dispatch(AuthAction.logout());
    }


    selectAuthFeature(){
        return this.store.select(getAuthFeature);
    }


}