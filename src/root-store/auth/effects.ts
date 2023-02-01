import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects/src";
import { catchError, map, of, switchMap } from "rxjs";
import { UserApiService } from "../../services/user-api.service";
import { AuthActions } from ".";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(action =>
        this.userApiService.login(action.payload.email, action.payload.password).pipe(
          map((response) => AuthActions.loginSuccess({ payload: response })),
          catchError(error => of(AuthActions.loginFailure({ payload: error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) { }
}
