import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeConversationTo } from './../action/chat.action';
import { Friend } from './../model/user.i';
import { getFriend } from './../selector/chat.selector';

@Injectable({
    providedIn: 'root'
})
export class ChatStoreFacade {
    constructor(private store: Store) { }

    changeConversationTo(friend: Friend) {
        this.store.dispatch(changeConversationTo({ friend }));
    }

    selectFriend() {
        return this.store.select(getFriend);
    }


}