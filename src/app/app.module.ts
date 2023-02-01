import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RootStoreModule } from '../root-store/root-store.module';
import { UserApiService } from '../services/user-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    RootStoreModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [
    UserApiService
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
