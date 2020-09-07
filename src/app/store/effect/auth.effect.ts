import { User } from './../model/user.i';
import { UserService } from './../service/user.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EAuth, loginSuccess } from '../action/auth.action';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    login$ = createEffect(() => 
    this.actions$.pipe(
      ofType(EAuth.LOGIN),
      switchMap(
          () => this.userService.getUser().pipe(
              map((result: User[]) => {
                  console.log(result);
                  return loginSuccess({user: result[0]})
                }
              )
          )
      )
      
      
    )
  );

}