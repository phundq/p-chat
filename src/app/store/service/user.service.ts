import { User } from './../model/user.i';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User[] =[{
    id: 1,
    fullName: "abc",
    username: "abc@gmail.com"
  }]

  getUser(): Observable<User[]>{
    return of(this.user);
  }
}
