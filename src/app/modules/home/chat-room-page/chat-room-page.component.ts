import { MessageItem } from './../../../store/model/message.i';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-room-page',
  templateUrl: './chat-room-page.component.html',
  styleUrls: ['./chat-room-page.component.scss']
})
export class ChatRoomPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() send = new EventEmitter<string>();

  handlerClickSend(data: string){
    console.log(data);
    this.send.emit(data);    
  }









  // mock

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
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
      time: new Date(),
      isFriend: true
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content  á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aas ",
      time: new Date("2020-09-09T00:00:00"),
      isFriend: false
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
      time: new Date(),
      isFriend: true
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content ds aas ",
      time: new Date("2020-09-09T00:00:00"),
      isFriend: false
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message  sd ",
      time: new Date(),
      isFriend: true
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      message: "message content lorem asdsadsaf a s ad asd sad s ad sa d sa ds aas ",
      time: new Date("2020-09-09T00:00:00"),
      isFriend: false
    },
  ];

}
