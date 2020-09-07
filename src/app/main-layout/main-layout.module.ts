import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    SharedModule, 
    RouterModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
