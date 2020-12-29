import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthAction from '../action/auth.action';
import { MessageConstant } from './../../shared/constant/message.constant';
import { HttpService } from './../service/http.service';
import { UserService } from './../service/user.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private httpService: HttpService,
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.EAuth.LOGIN),
      switchMap((action: any) =>
        this.userService.login(action.username, action.password)
          .pipe(
            map((result: any) => {
              if (result.user != null && !this.httpService.handlerError(result)) {
                return AuthAction.loginSuccess({ user: { ...result.user }, accessToken: result.accessToken });
              }
              return AuthAction.loginFail({ message: MessageConstant.LOGIN_FAIL });
            }
            ),
            catchError((error) =>
              of(AuthAction.loginFail({ message: MessageConstant.LOGIN_FAIL }))
            )
          )
      )
    )
  );

}