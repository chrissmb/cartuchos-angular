import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';

@NgModule({
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ],
  declarations: [EstoqueComponent]
})
export class EstoqueModule { }
