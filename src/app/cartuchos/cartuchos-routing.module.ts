import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartuchosComponent } from './cartuchos.component';
import { CartuchoFormComponent } from './cartucho-form/catucho-form.component';
import { cartuchoDetalheComponent } from './cartucho-detalhe/cartucho-detalhe.component';

const routes: Routes = [
  {
    path: '', component: CartuchosComponent, children: [
      { path: 'novo', component: CartuchoFormComponent },
      { path: ':id', component: CartuchoDetalheComponent, 
          resolve: { cartucho: CartuchoResolver } },
      { path: ':id/edit', component: CartuchoFormComponent, 
          resolve: { cartucho: CartuchoResolver } }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartuchosRoutingModule { }
