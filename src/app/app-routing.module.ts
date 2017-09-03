import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PaginaInvalidaComponent } from './pagina-invalida/pagina-invalida.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'departamentos',
    loadChildren: 'app/departamentos/departamentos.module#DepartamentosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }, {
    path: 'cartuchos',
    loadChildren: 'app/cartuchos/cartuchos.module#CartuchosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }, {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PaginaInvalidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
