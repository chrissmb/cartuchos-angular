import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { DepartamentosService } from './departamentos.service';

@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ],
  declarations: [
    DepartamentosComponent
  ],
  providers: [
    DepartamentosService
  ]
})
export class DepartamentosModule { }
