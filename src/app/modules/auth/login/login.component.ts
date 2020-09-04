import { UserService } from './../../../store/service/user.service';
import { UserStoreFacade } from './../../../store/store-facade/user-store-facade';
import { User } from './../../../store/model/user.i';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  isLoading: boolean = false;
  formLogin: FormGroup;
  hide = true;

  constructor(
    private userStoreFacade: UserStoreFacade,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    
    userStoreFacade.selectUserFeature().subscribe(
      userFeature => {
        this.users = userFeature.users;
        this.isLoading = userFeature.isLoading;

      }
    );

    this.createForm();
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(userName: string, password: string){
    console.log(userName);
    console.log(password);
    this.userStoreFacade.getAll()
    
  }
}
