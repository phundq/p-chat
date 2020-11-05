import { CommonStoreFacade } from './../../store/store-facade/common-store-facade';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isActiveChatList: boolean = true;
  public isMobile: boolean;
  constructor(private router: Router, public commonStoreFacade: CommonStoreFacade) { }
  public subscriptionIsActiveChatList: Subscription;
  @Output() clickLoginOrLogout = new EventEmitter<any>();
  @Input() isLoginSuccess: boolean = false;
  ngOnInit(): void {
    this.subscriptionIsActiveChatList = this.commonStoreFacade.getCommonFeature().subscribe(
      data => {
        this.isActiveChatList = data.isActiveChatList;
        this.isMobile = data.isMobile;
      }
    );
  }

  handlerClickLoginOrLogout() {
    this.clickLoginOrLogout.emit();
  }

  goToHome() {
    this.router.navigate([''])
    if (this.isActiveChatList && this.isMobile)
      this.commonStoreFacade.deactivateChatList();
  }
}
