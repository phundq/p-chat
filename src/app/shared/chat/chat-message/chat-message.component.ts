import { MessageItem } from './../../../store/model/message.i';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {        
    this.scrollToBottom();        
}

  @Input() messageItems: MessageItem[] = [];
  @Output() send = new EventEmitter<string>();

  @ViewChild('scrollMessage') private myScrollContainer: ElementRef;

  handlerClickSend(data: string){
    this.send.emit(data);    
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}

}
