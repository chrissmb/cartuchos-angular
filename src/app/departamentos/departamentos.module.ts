import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { DepartamentosService } from './departamentos.service';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { DepartamentoResolver } from './departamento.resolver';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    DepartamentosRoutingModule
  ],
  declarations: [
    DepartamentosComponent,
    DepartamentoDetalheComponent,
    DepartamentoFormComponent
  ],
  providers: [
    DepartamentosService,
    DepartamentoResolver,
    FormBuilder
  ]
})
export class DepartamentosModule { }
