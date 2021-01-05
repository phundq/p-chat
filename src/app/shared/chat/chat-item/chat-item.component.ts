import { User, Friend } from './../../../store/model/user.i';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  constructor() { }

  @Input() chatIem: Friend = {
    id: 0,
    username: "username",
    avatar: "",
    friendId: 1,
    fullName: "Full Name",
    isOnLine: false
  }

  ngOnInit(): void {
  }

}