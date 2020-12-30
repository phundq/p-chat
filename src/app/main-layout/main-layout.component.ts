import { CommonService } from './../store/service/common.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { isActivateChatList } from '../store/selector/common.selector';
import { AuthStoreFacade } from './../store/store-facade/auth-store-facade';
import { CommonStoreFacade } from './../store/store-facade/common-store-facade';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  isLoginSuccess: boolean = false;
  isLoading: boolean = false;
  isActiveChatList: boolean = true;
  isMobile: boolean;

  public subscriptionAuth: Subscription;
  public subscriptionIsLoading: Subscription;
  public subscriptionIsLoginSuccess: Subscription;
  public subscriptionLoginFail: Subscription;
  public subscriptionCommon: Subscription;
  public subscriptionConfirm: Subscription;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private commonStoreFacade: CommonStoreFacade,
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscriptionIsLoading = this.authStoreFacade.selectIsLoading().subscribe(
      loading => {
        this.isLoading = loading
      }
    );
    this.subscriptionIsLoginSuccess = this.authStoreFacade.selectIsLoginSuccess().subscribe(
      loginSuccess => {
        this.isLoginSuccess = loginSuccess;
        if (this.isLoginSuccess) {
          this.router.navigate(['']);
        }
        else {
          this.router.navigate(['\login']);
        }
      }
    );

    this.commonService.initBrowser();

    this.subscriptionCommon = this.commonStoreFacade.getCommonFeature().subscribe(
      data => {
        this.isActiveChatList = data.isActiveChatList;
        this.isMobile = data.isMobile;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptionAuth)
      this.subscriptionAuth.unsubscribe();
    if (this.subscriptionIsLoading)
      this.subscriptionIsLoading.unsubscribe();
    if (this.subscriptionIsLoginSuccess)
      this.subscriptionIsLoginSuccess.unsubscribe();
    if (this.subscriptionCommon)
      this.subscriptionCommon.unsubscribe();
  }

  handlerClickLoginOrLogout() {

    if (!this.isLoginSuccess) {
      this.router.navigate(['\login']);
    }
    else {
      this.subscriptionConfirm = this.commonService.openYesNoDialog("Logout", "Are you sure you want to log out?")
        .subscribe(
          data => {
            this.subscriptionConfirm = undefined;
            if (data == true) {
              this.authStoreFacade.logout();
            }
          }
        )
    }
  }

  handlerToggleChatList(isActive: boolean) {
    this.isActiveChatList = isActive;
  }

  onResize() {
    this.commonService.handlerResizeBrowser(this.isActiveChatList, this.isMobile);
  }
}
