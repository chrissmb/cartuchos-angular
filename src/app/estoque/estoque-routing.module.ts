import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoqueComponent } from './estoque.component';
import { EstoqueEntradaComponent} from './estoque-entrada/estoque-entrada.component';
import { EstoqueSaidaComponent} from './estoque-saida/estoque-saida.component';

const routes: Routes = [{
  path: '', component: EstoqueComponent, children: [
    {path: 'entrada', component: EstoqueEntradaComponent},
    {path: 'saida', component: EstoqueSaidaComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
