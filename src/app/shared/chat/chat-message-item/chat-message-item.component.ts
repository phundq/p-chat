import { MessageItem } from './../../../store/model/message.i';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() messageItem: MessageItem = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
    message: "message content lorem asdsadsaf sadf sadfasf  asdas f à à sa afsas ff à à á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aasdas asdsas asdasas asdassad asdassasa asdasdsada adsadad  asd sấ d sa d sa sa   sa  sa ds a asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
    time: new Date(),
    isFriend: true
  };
}
