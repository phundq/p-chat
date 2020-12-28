import { MessageConstant } from './../../shared/constant/message.constant';
import { loginFail } from './../action/auth.action';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthAction from '../action/auth.action';
import { UserService } from './../service/user.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.EAuth.LOGIN),
      switchMap((action: any) =>
        this.userService.login(action.username, action.password)
          .pipe(
            map((result: any) =>
              AuthAction.loginSuccess({ user: { ...result.user }, accessToken: result.accessToken })
            ),
            catchError((error) =>
              of(AuthAction.loginFail({ message: MessageConstant.LOGIN_FAIL }))
            )
          )
      )
    )
  );

}