import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';

@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ],
  declarations: [DepartamentosComponent]
})
export class DepartamentosModule { }
