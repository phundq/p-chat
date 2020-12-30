import { AccessToken } from './../model/user.i';
import { SocketConstant } from './../../shared/constant/socket.constant';
import { CommonService } from './common.service';
import { MessageTestSocket, MessageItem } from './../model/message.i';
import * as socketIO from 'socket.io-client';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class MessageService {
  socket: socketIO.SocketIOClient.Socket;
  data: MessageTestSocket[] = [];
  dataRender: MessageItem[];
  count = 0;
  userID = "";
  constructor(private commonService: CommonService) { }

  setupSocketConnection() {
    let socketOptions = {
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: 'Bearer ' + this.commonService.getAccessToken(), //'Bearer h93t4293t49jt34j9rferek...'
            // Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBodUBnbWFpbC5jb20iLCJzdWIiOjIsImlhdCI6MTYwOTIzNDMxMywiZXhwIjoxNjA5MjM3OTEzfQ.95ENFe6Z239ypG8eEhcTajgIRRwdMD4pAehz4AVehso", //'Bearer h93t4293t49jt34j9rferek...'
          }
        }
      },
    };
    //Token test expiresIn Time: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBodUBnbWFpbC5jb20iLCJzdWIiOjIsImlhdCI6MTYwOTIzNDMxMywiZXhwIjoxNjA5MjM3OTEzfQ.95ENFe6Z239ypG8eEhcTajgIRRwdMD4pAehz4AVehso
    this.socket = socketIO.connect('http://192.168.4.220:3000', socketOptions);
    this.socket.on('connect', () => {
      console.log('connected');
    });
  }
  chat(data: MessageTestSocket) {
    this.socket.emit(SocketConstant.CHAT_TO_SERVER, data);
  }
  chatClient() {
    this.socket.on(SocketConstant.CHAT_TO_CLIENT, (data) => {
      this.receiveChat(data);
    });
  }

  handlerError() {
    this.socket.on(SocketConstant.TOKEN_INVALID, (data) => {
      console.log(data);
      this.commonService.logout();
      this.commonService.openErrorDialog("System error", "The login session expires");
    });
  }

  handlerNewToken() {
    this.socket.on(SocketConstant.TOKEN_RENEW, (data) => {
      console.log(data);
      this.commonService.renewToken(data)
    });
  }

  receiveChat(msg) {
    this.data.push(msg);
    this.dataRender = this.data.map((data) => {
      let mesR: MessageItem = {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
        message: data.messenger,
        time: data.time,
        isFriend: (data.userId === this.userID) ? false : true,
      }
      return mesR;
    })
    console.log(this.data);

  }
  joinRoom(room: string) {
    this.socket.emit(SocketConstant.JOIN_ROOM, room);
  }

  setUserId(data: string) {
    this.userID = data;
  }
}
