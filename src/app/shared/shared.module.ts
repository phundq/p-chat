import { MaterialCustomModule } from './material-custom/material-custom.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule
  ],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
