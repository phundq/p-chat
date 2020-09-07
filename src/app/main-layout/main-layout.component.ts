import { AuthStoreFacade } from './../store/store-facade/auth-store-facade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isLoginSuccess: boolean = false;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private router: Router) { }

  ngOnInit() {
    this.authStoreFacade.selectAuthFeature().subscribe(
      userFeature => {
        this.isLoginSuccess = userFeature.isLoginSuccess;
        if (this.isLoginSuccess) {
          this.router.navigate(['\home']);
        }
        else{
          this.router.navigate(['\login']);
        }
      }
    );
  }

  handerClickLoginOrLogout() {
    console.log(this.isLoginSuccess);

    if (!this.isLoginSuccess) {
      this.router.navigate(['\login']);
    }
    else{
      this.authStoreFacade.logout();
    }
  }

}
