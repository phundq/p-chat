import { User, Friend } from './../../../store/model/user.i';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() search = new EventEmitter<string>();
  @Output() getChatItem = new EventEmitter<Friend>();
  @Output() closeChatList = new EventEmitter<Friend>();
  @Input() chatList: Friend[] = [
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: false
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: false
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      friendId: 1,
      isOnLine: true
    },


  ];

  handlerClickSearch(data: string) {
    this.search.emit(data);
  }

  handlerClickChatItem(data: Friend) {
    this.getChatItem.emit(data);
  }

  handlerCloseChatList() {
    this.closeChatList.emit();
  }
}
