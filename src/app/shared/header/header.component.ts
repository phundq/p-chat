import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  @Output() clickLoginOrLogout = new EventEmitter<any>();
  @Input() isLoginSuccess: boolean = false;
  ngOnInit(): void {
  }

  handlerClickLoginOrLogout(){
    this.clickLoginOrLogout.emit();
  }

  goToHome(){
    this.router.navigate([''])
  }
}
