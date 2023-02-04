import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from 'src/services/user-api.service';
import { Observable } from 'rxjs';
import { AuthActions, AuthSelectors, RootStoreState } from 'src/root-store';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup<any>;
  public isResetPasswordLinkSent: Observable<boolean>;
  constructor(private userService: UserApiService, private toster: ToastrService, private store$: Store<RootStoreState.State>) {

    this.isResetPasswordLinkSent = this.store$.select(AuthSelectors.selectUserResetPasswordLinkSent);
  }
  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.store$.dispatch(AuthActions.forgotPassword({ payload: { email: this.forgotPasswordForm.value.email } }));

  }
  onReset(): void {
    this.store$.dispatch(AuthActions.resetPasswordLinkSent({ payload: { isResetPasswordLinkSent: false } }));
  }
}
