import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,

  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ]
})
export class AuthModule { }
