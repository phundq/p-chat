import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './../../../store/model/user.i';
import { UserService } from './../../../store/service/user.service';
import { AuthStoreFacade } from './../../../store/store-facade/auth-store-facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user?: User;
  isLoading: boolean = false;
  isLoginSuccess: boolean = false;
  isLoginFail: boolean = false;
  formLogin: FormGroup;
  hide = true;

  public subscriptionAuth: Subscription;
  public subscriptionIsLoading: Subscription;
  public subscriptionIsLoginSuccess: Subscription;
  public subscriptionIsLoginFail: Subscription;
  public subscriptionCommon: Subscription;
  public subscriptionConfirm: Subscription;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  createForm() {
    this.formLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscriptionIsLoading = this.authStoreFacade.selectIsLoading().subscribe(
      loading => {
        this.isLoading = loading
      }
    );
    this.subscriptionIsLoginFail = this.authStoreFacade.selectIsLoginFail().subscribe(
      loading => {
        this.isLoginFail = loading
      }
    );
    this.createForm();
  }

  submit(username: string, password: string) {
    console.log(username);
    console.log(password);
    this.authStoreFacade.login(username, password);
  }
}
