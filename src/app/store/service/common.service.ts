import { AccessToken } from './../model/user.i';
import { renewToken } from './../action/auth.action';
import { AuthStoreFacade } from './../store-facade/auth-store-facade';
import { ErrorDialogComponent } from './../../shared/dialog/error-dialog/error-dialog.component';
import { isActivateChatList } from './../selector/common.selector';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommonStoreFacade } from './../store-facade/common-store-facade';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from 'src/app/shared/dialog/yes-no-dialog/yes-no-dialog.component';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommonService {



    constructor(
        public commonStoreFacade: CommonStoreFacade,
        public authStoreFacade: AuthStoreFacade,
        public dialog: MatDialog
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

    openErrorDialog(title: string, message: string) {
        this.dialog.open(ErrorDialogComponent, {
            data: { errorTitle: title, errorMessage: message },
            autoFocus: false
        });
    }

    openYesNoDialog(title: string, message: string) {
        const dialogRef = this.dialog.open(YesNoDialogComponent, {
            data: { title: title, message: message },
            autoFocus: false
        });

        return dialogRef.afterClosed();
    }

    getAccessToken() {
        let isLoginSuccess: Boolean = false;
        let token = null;
        this.authStoreFacade.selectAuthFeature().pipe(distinctUntilChanged())
            .subscribe(
                (data) => {
                    isLoginSuccess = data.isLoginSuccess;
                    if (isLoginSuccess) {
                        token = data.accessToken.token;
                    }
                }
            )
            .unsubscribe();
        return token;
    
    }
    getUserId() {
        let isLoginSuccess: Boolean = false;
        let userId = null;
        this.authStoreFacade.selectAuthFeature().pipe(distinctUntilChanged())
            .subscribe(
                (data) => {
                    isLoginSuccess = data.isLoginSuccess;
                    if (isLoginSuccess) {
                        userId = data.user.id;
                    }
                }
            )
            .unsubscribe();
        return userId;
    }

    logout() {
        this.authStoreFacade.logout();
    }

    renewToken(accessToken: AccessToken) {
        this.authStoreFacade.renewToken(accessToken)
    }
}
