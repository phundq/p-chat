import { User } from './../model/user.i';
import { getAllUser, EUser, getAllUserSuccess, getAllUserFail } from './../action/user.action';
import { UserService } from './../service/user.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    // getAll$ = createEffect(() =>
    //     this.actions$.pipe((
    //         ofType(EUser.GET_ALL),
    //         mergeMap(
    //         () => this.userService.getUser().pipe(
    //             map((users: User[]) => getAllUserSuccess({users})),
    //             catchError(
    //                 (err) => of(getAllUserFail({message: "load User Fail"}))
    //             )
    //         )
    //         )
    //     ))
    // )

    getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EUser.GET_ALL),
      exhaustMap(
          () => this.userService.getUser().pipe(
              map((result: User[]) => {
                  console.log(result);
                  return getAllUserSuccess({users: result})
                }
              )
          )
      )
      
      
    )
  );

}