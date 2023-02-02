import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserApiService } from "../../services/user-api.service";
import { AuthActions } from ".";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable(
)
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private userApiService: UserApiService,
    private toster: ToastrService,
    private router: Router
  ) { }
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(action =>
        this.userApiService.login(action.payload.email, action.payload.password).pipe(
          map((response) => {
            this.toster.clear();
            this.toster.success(`Welcome, ${response.user.firstName} !`, '', {
              timeOut: 2000,
            });
            this.router.navigate(['home']);
            return AuthActions.loginSuccess({ payload: response })
          }),
          catchError(error => {
            this.toster.clear();
            this.toster.error(error.error.errorMessage, '', {
              timeOut: 10000,
              extendedTimeOut: 10000,
            });
            return of(AuthActions.loginFailure({ payload: error }))
          })
        )
      )
    )
  );


}
