import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';
import { EstoqueEntradaComponent } from './estoque-entrada/estoque-entrada.component';
import { EstoqueSaidaComponent } from './estoque-saida/estoque-saida.component';
import { DepartamentosService } from '../departamentos/departamentos.service';
import { DepartamentoResolver } from '../departamentos/departamento.resolver';

@NgModule({
  imports: [
    MaterializeModule,
    FormsModule,
    CommonModule,
    EstoqueRoutingModule
  ],
  declarations: [
    EstoqueComponent,
    EstoqueEntradaComponent,
    EstoqueSaidaComponent
  ],
  providers: [
    DepartamentosService,
    DepartamentoResolver,
    FormBuilder
  ]
})
export class EstoqueModule { }
