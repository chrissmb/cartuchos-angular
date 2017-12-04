import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

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

  constructor(private departamentosService: DepartamentosService) { }

  getDepartamentos() {
    this.departamentosService.getDepartamentosAtivos().subscribe(deptos => this.departamentos = deptos);
  }

  ngOnInit() {
    this.getDepartamentos();
    this.subscription = this.departamentosService.recieveRefreshDepartamentos()
        .subscribe(dados => this.getDepartamentos());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
