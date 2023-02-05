import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, MatIconModule, NgxSpinnerModule],
  exports: [
    BackButtonComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
