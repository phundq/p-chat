import { CommonService } from './../../../store/service/common.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './../../../store/model/user.i';
import { CommonStoreFacade } from './../../../store/store-facade/common-store-facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public isActiveChatList: boolean = true;
  public isMobile: boolean = true;
  public subscriptionInit: Subscription;

  constructor(private router: Router,
    public commonStoreFacade: CommonStoreFacade,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.subscriptionInit = this.commonStoreFacade.getCommonFeature().subscribe(
      data => {
        this.isActiveChatList = data.isActiveChatList;
        this.isMobile = data.isMobile;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscriptionInit) {
      this.subscriptionInit.unsubscribe();
    }
  }

  handlerClickSearch(data: string) {
    console.log(data)
  }
  handlerClickGetChatItem(data: User) {
    console.log(data);
    this.commonService.closeChatList(this.isActiveChatList, this.isMobile);
    this.router.navigate(['/chat']);
  }

  handlerToggleChatList() {
    this.isActiveChatList
      ? this.commonStoreFacade.deactivateChatList()
      : this.commonStoreFacade.activateChatList();
  }

  handlerCloseChatList() {
    if (this.isActiveChatList && this.isMobile)
      this.commonStoreFacade.deactivateChatList();
    return;
  }
}



