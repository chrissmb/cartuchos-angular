import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Cartucho } from '../../cartuchos/cartucho';
import { CartuchosService } from '../../cartuchos/cartuchos.service';
import { Departamento } from '../../departamentos/departamento';

@Component({
  selector: 'app-estoque-entrada',
  templateUrl: './estoque-entrada.component.html',
  styleUrls: ['./estoque-entrada.component.css']
})
export class EstoqueEntradaComponent implements OnInit, OnDestroy {

  cartuchos: Cartucho[];
  depCartuchos: Departamento;
  subscription: Subscription;
  formulario: FormGroup;

  constructor(
    private cartuchosService: CartuchosService,
    private formBuilder: FormBuilder
  ) { }

  getCartuchos() {
    this.cartuchosService.getCartuchosAtivos().subscribe(cartchs => this.cartuchos = cartchs);
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('ok');
    } else {
      console.log('no no');
    }
  }

  ngOnInit() {
    this.getCartuchos();
    this.subscription = this.cartuchosService.recieveRefreshCartuchos()
      .subscribe(dados => this.getCartuchos());

    this.formulario = this.formBuilder.group({
      cartucho: [null, Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
