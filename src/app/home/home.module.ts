import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CartuchosModule } from '../cartuchos/cartuchos.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CartuchosModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
