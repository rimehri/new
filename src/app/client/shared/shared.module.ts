import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterClientComponent } from './footer-client/footer-client.component';
import { HeaderClientComponent } from './header-client/header-client.component';



@NgModule({
  declarations: [ FooterClientComponent, HeaderClientComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderClientComponent,
    FooterClientComponent,
  ]
})
export class SharedModule { }
