import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AuthActions, RootStoreState } from 'src/root-store';
import { UserApiService } from 'src/services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm: FormGroup;
  constructor(private userService: UserApiService, private store$: Store<RootStoreState.State>, private toster: ToastrService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    this.store$.dispatch(AuthActions.login({ payload: { email: this.loginForm.value.email, password: this.loginForm.value.password } }));
  }

  ngOnDestroy() {
  }
}
