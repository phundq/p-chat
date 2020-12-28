import { HttpService } from './http.service';
import { User } from './../model/user.i';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpService: HttpService) { }

  user: User[] = [{
    id: 1,
    fullName: "abc",
    username: "abc@gmail.com"
  }]

  getUser(): Observable<User[]> {
    return of(this.user);
  }

  login(username: string, password: string): Observable<any> {
    return this.httpService.post("auth/login", { username: username, password: password })
  }
}
