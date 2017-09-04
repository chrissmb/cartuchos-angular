import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartuchosRoutingModule } from './cartuchos-routing.module';
import { CartuchosComponent } from './cartuchos.component';
import { CartuchoDetalheComponent } from './cartucho-detalhe/cartucho-detalhe.component';
import { CartuchoFormComponent } from './cartucho-form/cartucho-form.component';
import { CartuchosService } from './cartuchos.service';

@NgModule({
  imports: [
    CommonModule,
    CartuchosRoutingModule
  ],
  declarations: [
    CartuchosComponent,
    CartuchoDetalheComponent,
    CartuchoFormComponent
  ]
})
export class CartuchosModule { }
