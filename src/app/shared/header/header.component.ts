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
  constructor(private router: Router, public commonStoreFacade: CommonStoreFacade) { }
  public subscriptionIsActiveChatList: Subscription;
  @Output() clickLoginOrLogout = new EventEmitter<any>();
  @Input() isLoginSuccess: boolean = false;
  ngOnInit(): void {
    this.subscriptionIsActiveChatList = this.commonStoreFacade.isActiveChatList().subscribe(
      data => {
        this.isActiveChatList = data;
      }
    );
  }

  handlerClickLoginOrLogout() {
    this.clickLoginOrLogout.emit();
  }

  goToHome() {
    this.router.navigate([''])
    if (this.isActiveChatList)
      this.commonStoreFacade.deactivateChatList();
  }
}
