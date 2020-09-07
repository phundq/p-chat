import { Component, OnInit, Input } from '@angular/core';
import { ChatItem } from '../chat-item/chat-item.component';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() chatList: ChatItem[] = [
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
      fullName: "Quốc Phú"
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
      fullName: "Quốc Phú 1"
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
      fullName: "Quốc Phú 2"
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
      fullName: "Quốc Phú 3"
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
      fullName: "Quốc Phú 4"
    }
  ];

}
