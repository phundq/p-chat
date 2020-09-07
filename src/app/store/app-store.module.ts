import { AuthEffect } from './effect/auth.effect';
import { UserEffect } from './effect/user.effect';
import { appReducer } from './app-state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffect, AuthEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ]
})
export class AppStoreModule { }
