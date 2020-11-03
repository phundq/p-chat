import { activateMobile, deactivateMobile } from './../action/common.action';
import { getCommonFeature, isActivateChatList, isMobile } from './../selector/common.selector';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CommonAction from '../action/common.action';

@Injectable({
    providedIn: 'root'
})
export class CommonStoreFacade {
    constructor(private store: Store) { }

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

    isActiveChatList(){
        return this.store.select(isActivateChatList);
    }

    isMobile(){
        return this.store.select(isMobile);
    }
}