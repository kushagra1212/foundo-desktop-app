import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedReducer } from "./shared";
import { AuthModule } from "./auth";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    SharedModule,
    StoreModule.forRoot({
      shared: SharedReducer
    }),
    EffectsModule.forRoot([]),
  ],

  exports: [
    AuthModule,
    SharedModule,
  ]
})
export class RootStoreModule { }
