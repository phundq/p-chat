import { ChatService } from './../../../store/service/chat.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { getFriends } from './../../../store/selector/auth.selector';
import { AuthStoreFacade } from './../../../store/store-facade/auth-store-facade';
import { CommonService } from './../../../store/service/common.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, Friend } from './../../../store/model/user.i';
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
  public subscriptionFriend: Subscription;
  public chatList: Friend[] = [];

  constructor(
    private router: Router,
    public commonStoreFacade: CommonStoreFacade,
    public commonService: CommonService,
    public chatService: ChatService,
    public authStoreFacade: AuthStoreFacade,
  ) { }

  ngOnInit(): void {
    this.subscriptionInit = this.commonStoreFacade.getCommonFeature().subscribe(
      data => {
        this.isActiveChatList = data.isActiveChatList;
        this.isMobile = data.isMobile;
      }
    );

    this.subscriptionFriend = this.authStoreFacade.selectFriends()
      .pipe(distinctUntilChanged())
      .subscribe(
        data => {
          this.chatList = data.map(val => {
            let result: Friend = { ...val, isOnLine: true };
            return result;
          });
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
  handlerClickGetChatItem(data: Friend) {
    console.log(data);
    this.commonService.closeChatList(this.isActiveChatList, this.isMobile);
    this.chatService.changeConversationTo(data);
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



