import { AuthStoreFacade } from './../../../store/store-facade/auth-store-facade';
import { UserService } from './../../../store/service/user.service';
import { User } from './../../../store/model/user.i';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user?: User;
  isLoading: boolean = false;
  isLoginSuccess: boolean = false;
  formLogin: FormGroup;
  hide = true;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  createForm() {
    this.formLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.authStoreFacade.selectAuthFeature().subscribe(
      authFeature => {
        this.user = authFeature.user;
        this.isLoading = authFeature.isLoading;
        this.isLoginSuccess = authFeature.isLoginSuccess;
        if(this.isLoginSuccess){
          this.router.navigate(['']);
        }
      }
    );
    this.createForm();
  }

  submit(userName: string, password: string){
    console.log(userName);
    console.log(password);
    this.authStoreFacade.login();
  }
}
