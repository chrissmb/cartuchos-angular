import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { DepartamentosService } from './departamentos.service';
import { FormsModule } from '@angular/forms';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    DepartamentosRoutingModule
  ],
  declarations: [
    DepartamentosComponent,
    DepartamentoDetalheComponent
  ],
  providers: [
    DepartamentosService
  ]
})
export class DepartamentosModule { }
