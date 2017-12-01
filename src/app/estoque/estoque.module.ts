import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';
import { EstoqueEntradaComponent } from './estoque-entrada/estoque-entrada.component';
import { EstoqueSaidaComponent } from './estoque-saida/estoque-saida.component';

@NgModule({
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ],
  declarations: [
    EstoqueComponent,
    EstoqueEntradaComponent,
    EstoqueSaidaComponent
  ]
})
export class EstoqueModule { }
