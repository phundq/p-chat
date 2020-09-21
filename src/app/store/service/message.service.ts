import { MessageTestSocket, MessageItem } from './../model/message.i';
import * as socketIO from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  socket: socketIO.SocketIOClient.Socket;
  data: MessageTestSocket[] = [];
  dataRender: MessageItem[];
  count = 0;
  userID = "";
  constructor() { }

  setupSocketConnection() {
    this.socket = socketIO.connect('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('connected');
    });
  }
  chat(data: MessageTestSocket) {
    this.socket.emit('chatToServer', data);
  }
  chatClient() {
    this.socket.on('chatToClient', (data) => {
      this.receiveChat(data);
    });
  }
  receiveChat(msg) {
    this.data.push(msg);
    this.dataRender = this.data.map((data) => {
      let mesR: MessageItem = {
      avatar: "https://pchat.s3-ap-southeast-1.amazonaws.com/picturemessage_eowcndin.5lq.png",
      message: data.messenger,
      time: new Date(),
      isFriend: (data.userId === this.userID) ? false : true,
    }
    return mesR;
  })
    console.log(this.data);

  }
  joinRoom(room: string) {
    this.socket.emit('joinRoom', room);
  }

  setUserId(data: string) {
    this.userID = data;
  }
}
