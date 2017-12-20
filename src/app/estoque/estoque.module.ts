import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';
import { EstoqueEntradaComponent } from './estoque-entrada/estoque-entrada.component';
import { EstoqueSaidaComponent } from './estoque-saida/estoque-saida.component';
import { RegistrosComponent } from './registros/registros.component';
import { CartuchosService } from '../cartuchos/cartuchos.service';
import { CartuchoResolver } from '../cartuchos/cartucho.resolver';

@NgModule({
  imports: [
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EstoqueRoutingModule
  ],
  declarations: [
    EstoqueComponent,
    EstoqueEntradaComponent,
    EstoqueSaidaComponent,
    RegistrosComponent
  ],
  providers: [
    CartuchosService,
    CartuchoResolver,
    FormBuilder
  ]
})
export class EstoqueModule { }
