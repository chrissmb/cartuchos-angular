import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartuchosRoutingModule } from './cartuchos-routing.module';
import { CartuchosComponent } from './cartuchos.component';
import { CatuchoDetalheComponent } from './catucho-detalhe/catucho-detalhe.component';
import { CatuchoFormComponent } from './catucho-form/catucho-form.component';
import { CartuchosService } from './catuchos.service';

@NgModule({
  imports: [
    CommonModule,
    CartuchosRoutingModule
  ],
  declarations: [CartuchosComponent, CatuchoDetalheComponent, CatuchoFormComponent],
  provider: [
    CartuchosService
  ]
})
export class CartuchosModule { }
