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
  page = 0;
  size = 4;
  total: number;
  totalPages: number;

  constructor(private registrosService: RegistrosService) { }

  ngOnInit() {
    this.getRegistros(this.page);
  }

  getRegistros(page: number) {
    this.registrosService.getRegistros(page, this.size)
      .subscribe(dados => {
        this.registros = dados.content;
        this.page = dados.number;
        this.total = dados.totalElements;
        this.totalPages = dados.totalPages;
      });
  }

  mudouPagina(evento) {
    this.getRegistros(evento.valor);
  }

}
