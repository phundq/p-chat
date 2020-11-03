import { CommonStoreFacade } from './../../../store/store-facade/common-store-facade';
import { User } from './../../../store/model/user.i';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isActiveChatList: boolean = true;
  public subscriptionIsActiveChatList: Subscription;

  constructor(private router: Router,
    public commonStoreFacade: CommonStoreFacade) { }

  ngOnInit(): void {
    this.subscriptionIsActiveChatList = this.commonStoreFacade.isActiveChatList().subscribe(
      data => {
        this.isActiveChatList = data;
      }
    );
  }

  handlerClickSearch(data: string) {
    console.log(data)
  }
  handlerClickGetChatItem(data: User) {
    console.log(data)
    this.router.navigate(['/chat'])
  }

  handlerToggleChatList() {
    this.isActiveChatList
      ? this.commonStoreFacade.deactivateChatList()
      : this.commonStoreFacade.activateChatList();
  }

  handlerOpenChatList() {
    if (this.isActiveChatList)
      this.commonStoreFacade.deactivateChatList();
    return;
  }
}



