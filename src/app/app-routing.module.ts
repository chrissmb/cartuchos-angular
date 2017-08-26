import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'departamentos',
    loadChildren: 'app/departamentos/departamentos.module#DepartamentosModule'
  },
  {
    path: 'login',
    component: LoginComponent
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
