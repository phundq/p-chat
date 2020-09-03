import { UserService } from './../../../store/service/user.service';
import { UserStoreFacade } from './../../../store/store-facade/user-store-facade';
import { User } from './../../../store/model/user.i';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor(private userStoreFacade: UserStoreFacade, private userService: UserService) {

    console.log(userService.getUser())
    

    userStoreFacade.getAll();

    userStoreFacade.selectUserFeature().subscribe(
      userFeature => {
        this.users = userFeature.users;
        
      }
    )
  }

  ngOnInit(): void {
  }

}
