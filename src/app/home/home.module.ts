import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedModule } from './feed/feed.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FeedModule
  ],
  exports: [
    FeedModule
  ]
})
export class HomeModule { }
