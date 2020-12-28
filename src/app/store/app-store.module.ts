import { StoreDevModules } from './config/devtool';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-state';
import { AuthEffect } from './effect/auth.effect';
import { UserEffect } from './effect/user.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffect, AuthEffect]),
    StoreDevModules
  ]
})
export class AppStoreModule { }
