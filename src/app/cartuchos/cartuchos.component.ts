import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Cartucho } from './cartucho';
import { CartuchosService } from './cartuchos.service';

@Component({
  selector: 'app-cartuchos',
  templateUrl: './cartuchos.component.html',
  styleUrls: ['./cartuchos.component.css']
})
export class CartuchosComponent implements OnInit, OnDestroy {

  cartuchos: Cartucho[];
  consultaInativos = false;
  subscription: Subscription;

  constructor(private cartuchosService: CartuchosService) { }

  getCartuchos() {
    if (this.consultaInativos) {
      this.cartuchosService.getCartuchosTodos()
          .subscribe(cartuchos => this.cartuchos = cartuchos);
    } else {
      this.cartuchosService.getCartuchosAtivos()
          .subscribe(cartuchos => this.cartuchos = cartuchos);
    }
  }
  ngOnInit() {
    this.subscription = this.cartuchosService.recieveRefreshCartuchos()
        .subscribe(dados => this.getCartuchos);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
