import { MessageService } from './../../../store/service/message.service';
import { MessageItem, MessageTestSocket } from './../../../store/model/message.i';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-room-page',
  templateUrl: './chat-room-page.component.html',
  styleUrls: ['./chat-room-page.component.scss']
})
export class ChatRoomPageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  messageItems: MessageItem[] = [];
  ngOnInit(): void {
    this.messageService.setupSocketConnection();
    this.userId =  this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    this.messageService.joinRoom(this.room);
    this.messageService.chatClient();
    this.messageService.handlerError();
    this.messageService.handlerNewToken();
    this.messageService.setUserId(this.userId);
    
  }

  userId: string = '';
  data: MessageTestSocket[] = [];
  room :string = 'aRoom';
  @Output() send = new EventEmitter<string>();

  handlerClickSend(data: string){
    console.log(data);
    this.send.emit(data);    
    const mes: MessageTestSocket = {
      userId: this.userId,
      room: this.room,
      messenger: data,
      time: new Date(),
    }
    this.messageService.chat(mes);
    this.data = this.messageService.data;
    console.log(this.messageService.dataRender);
    
  }

  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}










  // mock

  // messageItems: MessageItem[] = [
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
  //     time: new Date(),
  //     isFriend: true
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem asdsadsaf sadf sadfasf  asdas f à à sa afsas ff à à á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aas ",
  //     time: new Date("2020-09-09T00:00:00"),
  //     isFriend: false
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
  //     time: new Date(),
  //     isFriend: true
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem asdsadsaf sadf sadfasf  asdas f à à sa afsas ff à à á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aas ",
  //     time: new Date("2020-09-09T00:00:00"),
  //     isFriend: false
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
  //     time: new Date(),
  //     isFriend: true
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem asdsadsaf sadf sadfasf  asdas f à à sa afsas ff à à á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aas ",
  //     time: new Date("2020-09-09T00:00:00"),
  //     isFriend: false
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
  //     time: new Date(),
  //     isFriend: false
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content  á fas  f sads ad sa  sa d sa s ad asd sad s ad sa d sa ds aas ",
  //     time: new Date("2020-09-09T00:00:00"),
  //     isFriend: true
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem  asa sa sa dá d sad sa ds a ds ad sads  da da sd ",
  //     time: new Date(),
  //     isFriend: true
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content ds aas ",
  //     time: new Date("2020-09-09T00:00:00"),
  //     isFriend: false
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message  sd ",
  //     time: new Date(),
  //     isFriend: false
  //   },
  //   {
  //     avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
  //     message: "message content lorem asdsadsaf a s ad asd sad s ad sa d sa ds aas ",
  //     time: new Date("2020-09-09T00:00:00"),
  //     isFriend: true
  //   },
  // ];

}
