import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { RootStoreState } from 'src/root-store';
import { UserApiService } from 'src/services/user-api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public showPassword: boolean = false;
  public signupForm: FormGroup<any>;
  public isLoading: boolean;
  constructor(private userService: UserApiService, private store$: Store<RootStoreState.State>, private toster: ToastrService, private router: Router) {
    this.isLoading = false;
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
    this.isLoading = true;
    this.toster.clear();
    this.userService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toster.clear();
        this.toster.success(res.message, '', {
          timeOut: 1000,
          extendedTimeOut: 1000,
        });
        setTimeout(() => {
          this.router.navigate(['auth']);
        }
          , 1000);
      }
      ,
      error: (err) => {
        this.isLoading = false;
        this.toster.clear();
        this.toster.error(err.error.errorMessage, '', {
          timeOut: 10000,
          extendedTimeOut: 10000,
        });
      }
    }
    );
  }
}
