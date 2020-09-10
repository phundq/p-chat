import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-input-item',
  templateUrl: './chat-input-item.component.html',
  styleUrls: ['./chat-input-item.component.scss']
})
export class ChatInputItemComponent implements OnInit {

  constructor() { }

  message: string = '';
  @Output() send = new EventEmitter<string>();
  @Output() clear  = new EventEmitter<any>();

  ngOnInit(): void {
  }

  handlerClickSend() {
    if (this.message !== "") {
      this.send.emit(this.message.trim());
      this.message = ''
    }
  }

  clearMessage() {
    this.message = '';
  }

}
