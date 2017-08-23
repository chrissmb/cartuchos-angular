import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartuchosRoutingModule } from './cartuchos-routing.module';
import { CartuchosComponent } from './cartuchos.component';

@NgModule({
  imports: [
    CommonModule,
    CartuchosRoutingModule
  ],
  declarations: [CartuchosComponent]
})
export class CartuchosModule { }
