import { MessageItem } from './../../../store/model/message.i';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() messageItems: MessageItem[] = [];
  @Output() send = new EventEmitter<string>();

  handlerClickSend(data: string){
    this.send.emit(data);    
  }

}
