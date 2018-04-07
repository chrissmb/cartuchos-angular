import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input('page') page: number;
  @Input('size') size: number;
  @Input('total') total: number;
  totalPages: number;
  qtdPaginacao = 3;
  arrayPages: number[];
  @Output() mudouPagina = new EventEmitter();
  linkNulo = 'javascript:void(0)';

  constructor() { }

  ngOnInit() {
  }

  listaPaginas() {
    this.arrayPages = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.arrayPages.push(i);
    }
  }

  @Input('totalPages')
  set updateTotalPagesValue(totalPages: number) {
    this.totalPages = totalPages;
    this.listaPaginas();
  }

  mudaPag(pag: number) {
    this.mudouPagina.emit({valor: pag});
  }

  proxPagina() {
    if (this.page < this.totalPages - 1) {
      this.mudaPag(this.page + 1);
    }
  }

  paginaAnt() {
    if (this.page > 0) {
      this.mudaPag(this.page - 1);
    }
  }

  primeiraPag() {
    this.mudaPag(0);
  }

  ultimaPag() {
    this.mudaPag(this.totalPages - 1);
  }

  diminuiPaginacao(pags) {
    const metadePgs = Math.ceil(this.qtdPaginacao / 2);
    let i = this.page - metadePgs;
    if (i < 0) {
      i = 0;
    }
    let f = i + this.qtdPaginacao;
    if (f > pags.length - 1) {
      f = pags.length - 1;
      i = f - this.qtdPaginacao;
      if (i < 0) {
        i = 0;
      }
    }
    return pags.slice(i, f);
  }
}
