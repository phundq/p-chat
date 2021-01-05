import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Friend } from './../model/user.i';
import { ChatStoreFacade } from './../store-facade/chat.store-facade';

@Injectable({
    providedIn: 'root'
})
export class ChatService {



    constructor(
        public chatStoreFacade: ChatStoreFacade,
    ) { }

    getFriend() {
        let friend: Friend = null;
        this.chatStoreFacade.selectFriend().pipe(distinctUntilChanged())
            .subscribe(
                (data) => {
                    friend = data
                }
            )
            .unsubscribe();
        return friend;
    }

    changeConversationTo(friend: Friend) {
        this.chatStoreFacade.changeConversationTo(friend);
    }

}
