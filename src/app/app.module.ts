import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { RootStoreModule } from '../root-store/root-store.module';
import { UserApiService } from '../services/user-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';
import { AuthApiService } from 'src/services/auth-api.service';
import { SharedApiService } from 'src/services/shared-api.service';
import { localstorageService } from 'src/services/localstorage.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    RootStoreModule,
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    AuthModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      timeOut: 2000,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-center',
      easeTime: 300,
      preventDuplicates: true,
      countDuplicates: true,
    }), // ToastrModule added
    NgxSpinnerModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production, // Restrict extension to log-only mode
        })
      : [],
  ],
  providers: [
    UserApiService,
    AuthApiService,
    SharedApiService,
    localstorageService,
  ],
  bootstrap: [AppComponent],

  exports: [],
})
export class AppModule {}
