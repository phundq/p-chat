import { User } from './../../../store/model/user.i';
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
  @Output() getChatItem = new EventEmitter<User>();
  @Input() chatList: User[] = [
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: false
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: false
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    {
      id: 1,
      username: "phu@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU ",
      fullName: "Quốc Phú",
      isOnline: true
    },
    

  ];

  handlerClickSearch(data: string) {  
    this.search.emit(data);
  }
  handlerClickChatItem(data: User) {  
    this.getChatItem.emit(data);
  }
}
