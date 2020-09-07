import { getUserFeature } from './../selector/user.selector';
import { getAllUser } from './../action/user.action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class UserStoreFacade {
    constructor(private store: Store) { }

    getAll() {
        this.store.dispatch(getAllUser());
    }

    logout(){
        
    }


    selectUserFeature(){
        return this.store.select(getUserFeature);
    }


}