import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentosComponent } from './departamentos.component';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';

const routes: Routes = [
  {
    path: '',
    component: DepartamentosComponent,
    children: [
      { path: 'novo', component: DepartamentoFormComponent },
      { path: ':id', component: DepartamentoDetalheComponent },
      { path: ':id/edit', component: DepartamentoFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
