import { MessageItem } from './../../../store/model/message.i';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  messageItems: MessageItem[] = [
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
      time: new Date(),
      isFriend: true
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content lorem asdsadsaf sadf sadfasf  asdas f à à sa afsas ff à à á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aas ",
      time: new Date("2020-09-09T00:00:00"),
      isFriend: false
    },
  ];

}
