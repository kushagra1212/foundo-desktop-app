import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AuthActions, RootStoreState } from 'src/root-store';
import { UserApiService } from 'src/services/user-api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public showPassword: boolean = false;
  public signupForm: FormGroup<any>;
  constructor(private userService: UserApiService, private store$: Store<RootStoreState.State>, private toster: ToastrService) {

  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ])
      )
      ,
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    this.store$.dispatch(AuthActions.signup({ payload: { email: this.signupForm.value.email, password: this.signupForm.value.password, firstName: this.signupForm.value.firstName, lastName: this.signupForm.value.lastName } }));
  }

}
