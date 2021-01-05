import { ChatService } from './../../../store/service/chat.service';
import { Friend } from './../../../store/model/user.i';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageItem, MessageTestSocket } from './../../../store/model/message.i';
import { CommonService } from './../../../store/service/common.service';
import { MessageService } from './../../../store/service/message.service';

@Component({
  selector: 'app-chat-room-page',
  templateUrl: './chat-room-page.component.html',
  styleUrls: ['./chat-room-page.component.scss']
})
export class ChatRoomPageComponent implements OnInit {

  constructor(
    public messageService: MessageService,
    public commonService: CommonService,
    public chatService: ChatService,
  ) { }

  messageItems: MessageItem[] = [];
  ngOnInit(): void {
    this.messageService.resetConnection();

  }

  data: MessageTestSocket[] = [];
  @Output() send = new EventEmitter<string>();

  handlerClickSend(data: string) {
    let friend: Friend = this.chatService.getFriend();
    if (friend == undefined || friend == null)
      return;
    console.log(data);
    this.send.emit(data);
    const mes: MessageTestSocket = {
      senderId: this.commonService.getUserId(),
      receiveId: friend.friendId,
      room: this.messageService.room,
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
