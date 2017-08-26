import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { Departamento } from '../departamento';
import { DepartamentosService } from '../departamentos.service';

@Component({
  selector: 'app-departamento-detalhe',
  templateUrl: './departamento-detalhe.component.html',
  styleUrls: ['./departamento-detalhe.component.css']
})
export class DepartamentoDetalheComponent implements OnInit, OnDestroy {

  departamento: Departamento;
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private departamentoService: DepartamentosService
  ) { }

  getDepartamento() {
    this.inscricao = this.route.data.subscribe(
      data => this.departamento = data.departamento
    );
  }

  ngOnInit() {
    this.getDepartamento();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
