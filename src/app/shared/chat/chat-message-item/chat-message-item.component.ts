import { formatDate } from '@angular/common';
import { map } from 'rxjs/operators';
import { MessageItem } from './../../../store/model/message.i';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnChanges {

  constructor() { }

  ngOnChanges(): void {
    this.messageItemCustom = {
    avatar: this.messageItem.avatar,
    message: this.messageItem.message.trim(),
    time: this.messageItem.time,
    timeTooltip: formatDate(this.messageItem.time,"medium","en-US"),
    isFriend: this.messageItem.isFriend
    }
    
  }
  messageItemCustom: any;
  @Input() messageItem: MessageItem ;
}
