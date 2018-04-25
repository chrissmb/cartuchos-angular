import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { CartuchosRoutingModule } from './cartuchos-routing.module';
import { CartuchosComponent } from './cartuchos.component';
import { CartuchoDetalheComponent } from './cartucho-detalhe/cartucho-detalhe.component';
import { CartuchoFormComponent } from './cartucho-form/cartucho-form.component';
import { CartuchosService } from './cartuchos.service';
import { CartuchoResolver } from './cartucho.resolver';
import { CartuchosEstoqueComponent } from './cartuchos-estoque/cartuchos-estoque.component';


@NgModule({
  imports: [
    CommonModule,
    CartuchosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CartuchosComponent,
    CartuchoDetalheComponent,
    CartuchoFormComponent,
    CartuchosEstoqueComponent
  ],
  providers: [
    CartuchosService,
    CartuchoResolver,
    FormBuilder
  ],
  exports: [CartuchosEstoqueComponent]
})
export class CartuchosModule { }
