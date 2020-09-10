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
    message: this.messageItem.message,
    time: this.messageItem.time,
    timeTooltip: formatDate(this.messageItem.time,"medium","en-US"),
    isFriend: this.messageItem.isFriend
    }
    
  }
  messageItemCustom: any;
  @Input() messageItem: MessageItem = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
    message: "message content lorem asdsadsaf sadf sadfasf  asdas f à à sa afsas ff à à á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aasdas asdsas asdasas asdassad asdassasa asdasdsada adsadad  asd sấ d sa d sa sa   sa  sa ds a asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
    time: new Date(),
    isFriend: true
  };
}
