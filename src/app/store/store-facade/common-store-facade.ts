import { activateMobile, deactivateMobile, setHasNewMessage, setHasNotNewMessage } from './../action/common.action';
import { getCommonFeature, isActivateChatList, isMobile } from './../selector/common.selector';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CommonAction from '../action/common.action';

@Injectable({
    providedIn: 'root'
})
export class CommonStoreFacade {
    constructor(private store: Store) { }

    // DISPATCH
    
    activateChatList() {
        this.store.dispatch(CommonAction.activateChatList());
    }

    deactivateChatList() {
        this.store.dispatch(CommonAction.deactivateChatList());
    }
    activateMobile() {
        this.store.dispatch(CommonAction.activateMobile());
    }

    deactivateMobile() {
        this.store.dispatch(CommonAction.deactivateMobile());
    }

    setHasNewMessage() {
        this.store.dispatch(CommonAction.setHasNewMessage());
    }

    setHasNotNewMessage() {
        this.store.dispatch(CommonAction.setHasNotNewMessage());
    }

    // SELECT

    getCommonFeature(){
        return this.store.select(getCommonFeature);
    }

    isActiveChatList(){
        return this.store.select(isActivateChatList);
    }

    isMobile(){
        return this.store.select(isMobile);
    }
}