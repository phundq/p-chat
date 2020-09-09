import { User } from './../../../store/model/user.i';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  constructor() { }

  @Input() chatIem: User = {
    id: 0,
    username: "username",
    avatar: "",
    fullName: "Full Name",
    isOnline: false
  }

  ngOnInit(): void {
  }

}