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
  public subscriptionCommon: Subscription;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private commonStoreFacade: CommonStoreFacade,
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscriptionAuth = this.authStoreFacade.selectAuthFeature().subscribe(
      authFeature => {
        this.isLoginSuccess = authFeature.isLoginSuccess;
        this.isLoading = authFeature.isLoading
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
    if (this.subscriptionCommon)
      this.subscriptionCommon.unsubscribe();
  }

  handlerClickLoginOrLogout() {

    if (!this.isLoginSuccess) {
      this.router.navigate(['\login']);
    }
    else {
      this.authStoreFacade.logout();
    }
  }

  handlerToggleChatList(isActive: boolean) {
    this.isActiveChatList = isActive;
  }

  onResize() {
    this.commonService.handlerResizeBrowser(this.isActiveChatList, this.isMobile);
  }
}
