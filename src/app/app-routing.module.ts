import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'departamentos',
    loadChildren: 'app/departamentos/departamentos.module#DepartamentosModule'
  }/*,
  {
    path: '',
    children: []
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
