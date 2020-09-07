import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  constructor() { }

  @Input() chatIem: ChatItem = {
    avatar:"",
    fullName:"Full Name"
} 
  ngOnInit(): void {
  }

}

export interface ChatItem{
  avatar?: string;
  fullName?: string;
}