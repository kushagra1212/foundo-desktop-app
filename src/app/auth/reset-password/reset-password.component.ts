import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions, RootStoreState } from 'src/root-store';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../forgot-password/forgot-password.component.scss', './reset-password.component.scss']
})
export class ResetPasswordComponent {
  public resetPasswordForm: FormGroup<any>;
  public showPassword: boolean = false;
  constructor(private store$:
    Store<RootStoreState.State>,
    private route: ActivatedRoute
  ) {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    this.resetPasswordForm.value.email = this.route.snapshot.paramMap.get('email');
    this.resetPasswordForm.value.token = this.route.snapshot.paramMap.get('token');
    this.store$.dispatch(AuthActions.resetPassword({ payload: this.resetPasswordForm.value }));
  }
}
