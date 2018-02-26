import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Cartucho } from '../../cartuchos/cartucho';
import { CartuchosService } from '../../cartuchos/cartuchos.service';
//import { Departamento } from '../../departamentos/departamento';
import { RegistrosService } from '../registros/registros.service';
import { Registro } from '../registros/registro';
import { Operacao } from '../registros/operacao';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Usuario } from '../../usuarios/usuario';

@Component({
  selector: 'app-estoque-entrada',
  templateUrl: './estoque-entrada.component.html',
  styleUrls: ['./estoque-entrada.component.css']
})
export class EstoqueEntradaComponent implements OnInit, OnDestroy {

  cartuchos: Cartucho[];
  //depCartuchos: Departamento;
  subscription: Subscription;
  formulario: FormGroup;
  registro: Registro;

  constructor(
    private cartuchosService: CartuchosService,
    private registrosService: RegistrosService,
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getCartuchos();
    this.subscription = this.cartuchosService.recieveRefreshCartuchos()
      .subscribe(dados => this.getCartuchos());
    
    this.registroFactory();
    
    this.formulario = this.formBuilder.group({
      cartucho: [null, Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  getCartuchos() {
    this.cartuchosService.getCartuchosAtivos()
      .subscribe(cartchs => this.cartuchos = cartchs);
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.registro);
      this.registrosService.saveRegistro(this.registro)
      .subscribe(registro => this.registro = registro);
    } else {
      console.log('no no');
    }
  }

  registroFactory() {
    this.registro = new Registro(null, null, null, 0, null, Operacao.Entrada, null);
    this.registro.operacao = Operacao.Entrada;
    this.usuariosService.getUsuarioLogado()
      .subscribe(usr => this.registro.usuario = usr);
  }

}
