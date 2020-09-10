import { User } from './../../../store/model/user.i';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handlerClickSearch(data: string) {
    console.log(data)
  }
  handlerClickGetChatItem(data: User) {
    console.log(data)
    this.router.navigate(['/chat'])
  }

}
