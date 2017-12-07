import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Departamento } from '../../departamentos/departamento';
import { DepartamentosService } from '../../departamentos/departamentos.service';

@Component({
  selector: 'app-estoque-entrada',
  templateUrl: './estoque-entrada.component.html',
  styleUrls: ['./estoque-entrada.component.css']
})
export class EstoqueEntradaComponent implements OnInit, OnDestroy {

  departamentos: Departamento[];
  lista = [1,2,3,4,5];
  subscription: Subscription;
  formulario: FormGroup;

  constructor(
    private departamentosService: DepartamentosService,
    private formBuilder: FormBuilder
  ) { }

  getDepartamentos() {
    this.departamentosService.getDepartamentosAtivos().subscribe(deptos => this.departamentos = deptos);
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('ok');
    } else {
      console.log('no no')
    }
  }

  ngOnInit() {
    this.getDepartamentos();
    this.subscription = this.departamentosService.recieveRefreshDepartamentos()
        .subscribe(dados => this.getDepartamentos());
    this.formulario = this.formBuilder.group({
      cartucho: [null, Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
