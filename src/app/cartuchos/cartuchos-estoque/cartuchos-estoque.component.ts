import { Component, OnInit } from '@angular/core';
import { CartuchosService } from '../cartuchos.service';
import { Cartucho } from '../cartucho';

@Component({
  selector: 'app-cartuchos-estoque',
  templateUrl: './cartuchos-estoque.component.html',
  styleUrls: ['./cartuchos-estoque.component.css']
})
export class CartuchosEstoqueComponent implements OnInit {

  cartuchos: Cartucho[];

  constructor(private cartuchosService: CartuchosService) { }

  ngOnInit() {
    this.getCartuchos();
  }

  getCartuchos() {
    this.cartuchosService.getCartuchosAtivos()
        .subscribe(cartuchos => this.cartuchos = cartuchos);
  }

}
