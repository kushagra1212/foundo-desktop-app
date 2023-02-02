import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthActions, AuthSelectors, RootStoreState } from 'src/root-store';
import { UserApiService } from 'src/services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm: FormGroup;
  isLoading: Observable<boolean>;
  isError: Observable<boolean>;
  message: Observable<string>;
  constructor(private userService: UserApiService, private store$: Store<RootStoreState.State>, private toster: ToastrService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.isLoading = this.store$.pipe(select(AuthSelectors.selectUserIsLoading));
    this.isError = this.store$.pipe(select(AuthSelectors.selectUserError));
    this.message = this.store$.pipe(select(AuthSelectors.selectUserMessage));
  }
  onSubmit(): void {
    this.store$.dispatch(AuthActions.login({ payload: { email: this.loginForm.value.email, password: this.loginForm.value.password } }));
  }

  ngOnDestroy() {
  }
}
