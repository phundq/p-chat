import { isActivateChatList } from './../selector/common.selector';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommonStoreFacade } from './../store-facade/common-store-facade';

@Injectable({
    providedIn: 'root'
})
export class CommonService {



    constructor(
        public commonStoreFacade: CommonStoreFacade
    ) { }

    closeChatList(isActiveChatList: boolean, isMobile: boolean) {
        if (isActiveChatList && isMobile)
            this.commonStoreFacade.deactivateChatList();
        return;
    }

    handlerResizeBrowser(isActiveChatList: boolean, isMobile: boolean) {
        if (window.innerWidth < 768 && !isMobile) { // 768px portrait
            this.commonStoreFacade.activateMobile();
        }
        if (window.innerWidth >= 768 && isMobile) {
            this.commonStoreFacade.deactivateMobile();
        }

        if (isActivateChatList && isMobile) {
            this.commonStoreFacade.deactivateChatList();
        }
    }

    initBrowser() {
        if (window.innerWidth < 768) { // 768px portrait
            this.commonStoreFacade.activateMobile();
        }
        else {
            this.commonStoreFacade.deactivateMobile();
        }
    }

}
