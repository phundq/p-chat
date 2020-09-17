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
  isLoading: boolean = false;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private router: Router) { }

  ngOnInit() {
    this.authStoreFacade.selectAuthFeature().subscribe(
      authFeature => {
        this.isLoginSuccess = authFeature.isLoginSuccess;
        this.isLoading = authFeature.isLoading
        if (this.isLoginSuccess) {
          this.router.navigate(['']);
        }
        // else{
        //   this.router.navigate(['\login']);
        // }
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
