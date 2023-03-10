import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { SideBarComponent } from './header/side-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ColorComponent } from './atoms/color/color.component';

@NgModule({
  exports: [
    SpinnerComponent,
    SideBarComponent,
    PageNotFoundComponent,
    BackButtonComponent,
    ColorComponent,
  ],
  declarations: [
    SpinnerComponent,
    SideBarComponent,
    PageNotFoundComponent,
    BackButtonComponent,
    ColorComponent,
  ],
  imports: [CommonModule, MatIconModule, NgxSpinnerModule],
})
export class SharedModule {}
