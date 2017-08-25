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
    private router: Router,
    private departamentoService: DepartamentosService
  ) { }

  ngOnInit() {
    this.getDepartamento();
  }

  getDepartamento() {
    this.inscricao = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.departamentoService.getDepartamento(id)
            .subscribe(departamento => this.departamento = departamento);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
