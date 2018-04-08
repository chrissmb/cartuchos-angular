import { Component, OnInit } from '@angular/core';

import { Registro } from './registro';
import { RegistrosService } from './registros.service';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  registros: Registro[];
  page = 1;
  size = 7;
  total: number;
  totalPages: number;
  dataInicio: string ;
  dataFim: string;

  constructor(private registrosService: RegistrosService) { }

  ngOnInit() { }

  getRegistros(page: number) {
    this.registrosService.getRegistros(page - 1, this.size, this.dataInicio, this.dataFim)
      .subscribe(dados => {
        this.registros = dados.content;
        this.page = dados.number + 1;
        this.total = dados.totalElements;
        this.totalPages = dados.totalPages;
      });
  }

  mudouPagina(evento) {
    this.getRegistros(evento.valor);
  }

  pesquisar() {
    this.getRegistros(1);
  }

}
