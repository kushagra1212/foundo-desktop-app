import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthModule } from "./auth";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],

  exports: [
    AuthModule,
  ]
})
export class RootStoreModule { }
