import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { DepartamentosService } from './departamentos.service';
import { Departamento } from './departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit, OnDestroy {

  departamentos: Departamento[];
  consultaInativos = false;
  subscription: Subscription;

  constructor(private departamentosService: DepartamentosService) { }

  getDepartamentos() {
    if (this.consultaInativos) {
      this.departamentosService.getDepartamentosTodos().subscribe(deptos => this.departamentos = deptos);
    } else {
      this.departamentosService.getDepartamentosAtivos().subscribe(deptos => this.departamentos = deptos);
    }
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

