import { CommonService } from './../../../store/service/common.service';
import { MessageItem, MessageTestSocket } from './../../../store/model/message.i';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewChecked, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() messageItems: MessageTestSocket[] = [];
  @Output() send = new EventEmitter<string>();

  isShowScrollButton: boolean = false;

  @ViewChild('scrollMessage', { static: true }) private myScrollContainer: ElementRef;
  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.onScroll();
  }

  ngOnChanges(): void {
    if (this.messageItems != undefined && this.messageItems.length != undefined && this.messageItems.length > 0) {
      let lastMessage: MessageTestSocket = this.messageItems[this.messageItems.length - 1];
      console.log(lastMessage);
      console.log(this.commonService.getUserId());

      if (lastMessage.senderId == this.commonService.getUserId()) {
        console.log(true);

        this.scrollToBottom();
      } else {
        this.onScroll();
      }
    }
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  // ngAfterViewChecked() {
  //   if (this.messageItems != undefined && this.messageItems.length != undefined && this.messageItems.length > 0) {
  //     let lastMessage: MessageTestSocket = this.messageItems[this.messageItems.length - 1];
  //     console.log(lastMessage);
  //     console.log(this.commonService.getUserId());

  //     if (lastMessage.senderId == this.commonService.getUserId()) {
  //       console.log(true);

  //       this.scrollToBottom();
  //     } else {
  //       this.onScroll();
  //     }
  //   }
  // }


  handlerClickSend(data: string) {
    this.send.emit(data);
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      this.commonService.setHasNotNewMessage();
    } catch (err) { }
  }

  onScroll() {
    this.isShowScrollButton = this.myScrollContainer.nativeElement.scrollTop < (this.myScrollContainer.nativeElement.scrollHeight - this.myScrollContainer.nativeElement.clientHeight);
  }
}
