import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() clickLoginOrLogout = new EventEmitter<any>();
  @Input() isLoginSuccess: boolean = false;
  ngOnInit(): void {
  }

  handlerClickLoginOrLogout(){
    this.clickLoginOrLogout.emit();
  }
}
