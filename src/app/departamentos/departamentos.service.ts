import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Departamento } from './departamento';
import * as global from '../shared/global';

@Injectable()
export class DepartamentosService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    const auth = window.btoa('chris:123456');
    console.log('senha:' + auth);
    this.headers.append('Authorization', 'Basic ' + auth);
  }

  /*getDepartamentos() {
    let dpt1 = {
      id: 1,
      descricao: "Administração",
      ativo: true
    };
    let dpt2 = {
      id: 2,
      descricao: "TI",
      ativo: true
    };
    let dpt3 = {
      id: 3,
      descricao: "RH",
      ativo: false
    };
    let dpt4 = {
      id: 1,
      descricao: "Contabilidae",
      ativo: true
    };
    return [dpt1, dpt2, dpt3, dpt4];
}*/

  getDepartamentosAtivos(): Observable<Departamento[]> {
    return this.http
      .get(`${ global.enderecoSite }departamentos`, { headers: this.headers })
      .map(response => response.json() as Departamento[]);
  }

  getDepartamentosTodos(): Observable<Departamento[]> {
    return this.http
      .get(`${ global.enderecoSite }departamentos/all`, { headers: this.headers })
      .map(response => response.json() as Departamento[]);
  }

  getDepartamento(id: number): Observable<Departamento> {
    return this.http
      .get(`${ global.enderecoSite }departamentos/${id}`, { headers: this.headers })
      .map(response => response.json() as Departamento);
  }
}
