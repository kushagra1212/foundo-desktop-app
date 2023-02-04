import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserApiService } from "../../services/user-api.service";
import { AuthActions } from ".";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { RootStoreState } from "..";
import { Store } from "@ngrx/store";
import { SharedActions } from "../shared";
import { AuthApiService } from "src/services/auth-api.service";
import { SharedApiService } from "src/services/shared-api.service";
import { localstorageService } from "src/services/localstorage.service";

@Injectable(
)
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private userApiService: UserApiService,
    private toster: ToastrService,
    private router: Router,
    private store$: Store<RootStoreState.State>,
    private authApiService: AuthApiService,
    private sharedApiService: SharedApiService,
    private localStorageService: localstorageService,
    private route: Router
  ) { }
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(action => {
        this.store$.dispatch(SharedActions.setLoading({ status: true }));
        this.toster.clear();
        return this.userApiService.login(action.payload.email, action.payload.password).pipe(
          map((response) => {

            this.localStorageService.setItem('token', response.jwtToken);
            return AuthActions.loginSuccess({ payload: { ...response, showWelcomeMessage: true } })
          }),
          catchError(error => {
            return of(AuthActions.loginFailure({ payload: error }))
          })
        )
      }
      )
    )
  );
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      map(action => {
        this.sharedApiService.updateLoadingState({ status: true });
        this.toster.clear();
        return this.userApiService.signup({
          email: action.payload.email,
          password: action.payload.password,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        }).subscribe({
          next: (response) => {
            this.sharedApiService.updateLoadingState({ status: false });
            this.toster.success(response.message, '', {
              timeOut: 1000,
              extendedTimeOut: 1000,
            });
            this.router.navigate(['auth']);
          },
          error: (err) => {
            this.sharedApiService.updateLoadingState({ status: false });
            this.toster.error(this.sharedApiService.formatErrorMessage(err.error.errorMessage), '', {
              timeOut: 10000,
              extendedTimeOut: 10000,
            });
          }
        })
      }
      )),
    { dispatch: false }
  );
  onSuccessfulLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map((action) => {
        this.sharedApiService.updateLoadingState({ status: false });
        if (action.payload.showWelcomeMessage) {
          this.toster.success(`Welcome, ${action.payload.user.firstName} !`, '', {
            timeOut: 2000,
          });
        }
        if (this.route.routerState.snapshot.url.includes('/auth')) {
          this.router.navigate(['home']);
        }
      })
    ),
    { dispatch: false }
  );

  onLoginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      map((action) => {
        this.sharedApiService.updateLoadingState({ status: false });
        this.toster.error(this.sharedApiService.formatErrorMessage(action.payload.error.errorMessage), '', {
          timeOut: 10000,
          extendedTimeOut: 10000,
        });
      })
    ),
    { dispatch: false }
  );

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.forgotPassword),
      map(action => {
        this.sharedApiService.updateLoadingState({ status: true });
        this.toster.clear();
        return this.authApiService.forgotPassword(action.payload.email).subscribe({
          next: (response) => {
            this.sharedApiService.updateLoadingState({ status: false });
            this.store$.dispatch(AuthActions.resetPasswordLinkSent({ payload: { status: true } }));
            this.toster.success(response.message, '', {
              timeOut: 1000,
              extendedTimeOut: 1000,
            });
          },
          error: (err) => {
            this.store$.dispatch(AuthActions.resetPasswordLinkSent({ payload: { status: false } }));
            this.sharedApiService.updateLoadingState({ status: false });
            this.toster.error(this.sharedApiService.formatErrorMessage(err.error.errorMessage), '', {
              timeOut: 10000,
              extendedTimeOut: 10000,
            });
          },
        })
      }
      )),
    { dispatch: false }
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPassword)
      , map(action => {
        this.authApiService.resetPassword(action.payload).subscribe(
          {
            next: (response) => {
              this.sharedApiService.updateLoadingState({ status: false });
              this.toster.success(response.message, '', {
                timeOut: 3000,
                extendedTimeOut: 3000,
              });
              this.router.navigate(['auth']);
            },
            error: (err) => {
              this.sharedApiService.updateLoadingState({ status: false });
              this.toster.error(this.sharedApiService.formatErrorMessage(err.error.errorMessage), '', {
                timeOut: 10000,
                extendedTimeOut: 10000,
              });
            }
          }
        )
      }
      ),
    ), { dispatch: false }
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.appStarted),
      map(() => {
        const token = this.localStorageService.getItem('token');
        if (token) {

          this.sharedApiService.updateLoadingState({ status: true });
          return AuthActions.verifyToken({ payload: { token } });
        } else {
          this.localStorageService.removeItem('token');
          return AuthActions.logout();
        }
      })
    )
  );
  verifyToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.verifyToken),
      switchMap(action => {
        return this.authApiService.verifyToken(action.payload.token).pipe(
          map((response) => {
            this.sharedApiService.updateLoadingState({ status: false });
            return AuthActions.loginSuccess({ payload: { ...response, showWelcomeMessage: false } })
          }),
          catchError(error => {
            this.sharedApiService.updateLoadingState({ status: false });
            return of(AuthActions.loginFailure({ payload: error }))
          })
        )
      }
      )
    ),
  );

}
