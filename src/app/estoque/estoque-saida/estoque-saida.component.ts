import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Cartucho } from '../../cartuchos/cartucho';
import { CartuchosService } from '../../cartuchos/cartuchos.service';
import { Departamento } from '../../departamentos/departamento';
import { DepartamentosService } from './../../departamentos/departamentos.service';
import { RegistrosService } from '../registros/registros.service';
import { Registro } from '../registros/registro';
import { Operacao } from '../registros/operacao';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Usuario } from '../../usuarios/usuario';

@Component({
  selector: 'app-estoque-saida',
  templateUrl: './estoque-saida.component.html',
  styleUrls: ['./estoque-saida.component.css']
})
export class EstoqueSaidaComponent implements OnInit {

  cartuchos: Cartucho[];
  departamentos: Departamento[];
  depCartuchos: Departamento;
  formulario: FormGroup;
  registro: Registro;
  cartuchoId: number;

  constructor(
    private cartuchosService: CartuchosService,
    private depatamentosService: DepartamentosService,
    private registrosService: RegistrosService,
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getCartuchos();
    this.getDepartamentos();
    this.registroFactory();
    this.formulario = this.formBuilder.group({
      cartucho: [null, Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]],
      departamento: [null, Validators.required]
    });
  }

  getCartuchos() {
    this.cartuchosService.getCartuchosAtivos()
      .subscribe(cartchs => this.cartuchos = cartchs);
  }

  getDepartamentos() {
    this.depatamentosService.getDepartamentosAtivos()
      .subscribe(deptos => this.departamentos = deptos.filter(this.filtraDeptoCartucho));
  }

  filtraDeptoCartucho(depto: Departamento) {
    return depto.id !== 1;
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
    this.registro.operacao = Operacao.Saida;
    this.registro.cartucho = new Cartucho();
    this.registro.departamento = new Departamento();
    this.usuariosService.getUsuarioLogado()
      .subscribe(usr => this.registro.usuario = usr);
  }

}
