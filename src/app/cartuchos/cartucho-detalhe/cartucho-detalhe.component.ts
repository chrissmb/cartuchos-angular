import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Cartucho } from './../cartucho';
import { ActivatedRoute } from '@angular/router';
import { CartuchosService } from '../cartuchos.service';

@Component({
  selector: 'app-cartucho-detalhe',
  templateUrl: './cartucho-detalhe.component.html',
  styleUrls: ['./cartucho-detalhe.component.css']
})
export class CartuchoDetalheComponent implements OnInit, OnDestroy {

  cartucho: Cartucho;
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private cartuchosService: CartuchosService
  ) { }

  getCartucho() {
    this.inscricao = this.route.data.subscribe(
      data => this.cartucho = data.cartucho
    );
  }

  ngOnInit() {
    this.getCartucho();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
