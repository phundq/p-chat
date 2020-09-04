import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule
  ],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
