import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Cartucho } from '../../cartuchos/cartucho';
import { CartuchosService } from '../../cartuchos/cartuchos.service';
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
export class EstoqueEntradaComponent implements OnInit {

  cartuchos: Cartucho[];
  formulario: FormGroup;
  registro: Registro;
  cartuchoId: number;

  constructor(
    private cartuchosService: CartuchosService,
    private registrosService: RegistrosService,
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getCartuchos();
    this.registroFactory();
    this.formulario = this.formBuilder.group({
      cartucho: [null, Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]]
    });
  }

  getCartuchos() {
    this.cartuchosService.getCartuchosAtivos()
      .subscribe(cartchs => this.cartuchos = cartchs);
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.registrosService.saveRegistro(this.registro)
      .subscribe(response => this.registroFactory());
    } else {
      console.log('no no');
    }
  }

  registroFactory() {
    this.registro = new Registro();
    this.registro.quantidade = 0;
    this.registro.operacao = Operacao.Entrada;
    this.registro.cartucho = new Cartucho();
    this.usuariosService.getUsuarioLogado()
      .subscribe(usr => this.registro.usuario = usr);
  }
}
