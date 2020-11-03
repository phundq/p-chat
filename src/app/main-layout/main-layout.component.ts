import { activateMobile, deactivateMobile } from './../store/action/common.action';
import { isMobile } from './../store/selector/common.selector';
import { CommonStoreFacade } from './../store/store-facade/common-store-facade';
import { AuthStoreFacade } from './../store/store-facade/auth-store-facade';
import { Component, OnInit, OnChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  isLoginSuccess: boolean = false;
  isLoading: boolean = false;
  isActiveChatList: boolean = true;
  mobileQuery: MediaQueryList;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private commonStoreFacade: CommonStoreFacade,
    private router: Router,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.authStoreFacade.selectAuthFeature().subscribe(
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

    // if (window.screen.width <= 360) { // 768px portrait
    //   console.log("mobile");

    //   this.commonStoreFacade.activateMobile();
    // }
    // else {
    //   console.log("not mobile");

    //   this.commonStoreFacade.deactivateMobile();
    // }

    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  handlerClickLoginOrLogout() {
    console.log(this.isLoginSuccess);

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

  _mobileQueryListener() {
    console.log("change browser");
    
  }

}
