import { AccessToken } from './../model/user.i';
import { SocketEmitConstant, SocketConstant } from './../../shared/constant/socket.constant';
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
  public room: string = SocketConstant.CHAT_ROOM;
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
    //Token test out expiresIn Time: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBodUBnbWFpbC5jb20iLCJzdWIiOjIsImlhdCI6MTYwOTIzNDMxMywiZXhwIjoxNjA5MjM3OTEzfQ.95ENFe6Z239ypG8eEhcTajgIRRwdMD4pAehz4AVehso
    this.socket = socketIO.connect('http://192.168.4.220:3000', socketOptions);
    this.socket.on('connect', () => {
      console.log('connected');
    });
  }
  chat(data: MessageTestSocket) {
    this.receiveChat(data);
    this.socket.emit(SocketEmitConstant.CHAT_TO_SERVER, data);
  }
  chatClient() {
    this.socket.on(SocketEmitConstant.CHAT_TO_CLIENT, (data) => {
      if (data.senderId != this.commonService.getUserId()) {
        this.receiveChat(data);
      }
      this.commonService.setHasNewMessage();
    });
  }

  handlerError() {
    this.socket.on(SocketEmitConstant.TOKEN_INVALID, (data) => {
      console.log(data);
      this.commonService.logout();
      this.commonService.openErrorDialog("System error", "The login session expires");
    });
  }

  handlerNewToken() {
    this.socket.on(SocketEmitConstant.TOKEN_RENEW, (data) => {
      pipe(distinctUntilChanged())
      this.commonService.renewToken(data);
      this.changeTokenHeader(data.token);
      this.resetConnection();

    });
  }

  receiveChat(msg) {
    this.data.push(msg);
    this.dataRender = this.data.map((data) => {
      let mesR: MessageItem = {
        senderId: data.senderId,
        receiveId: data.receiveId,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
        message: data.messenger,
        time: data.time,
        isFriend: (data.senderId === this.commonService.getUserId()) ? false : true,
      }
      return mesR;
    })
    console.log(this.data);

  }
  joinRoom() {
    this.socket.emit(SocketEmitConstant.JOIN_ROOM, this.room);
  }

  changeTokenHeader(token: string) {
    this.socket.io.opts.transportOptions.polling.extraHeaders.Authorization = "Bearer " + token;
  }

  resetConnection() {
    if (this.socket)
      this.socket.disconnect();
    this.setupSocketConnection();
    this.joinRoom();
    this.chatClient();
    this.handlerError();
    this.handlerNewToken();
  }
}
