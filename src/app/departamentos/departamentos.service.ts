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
    this.headers.append('Authorization', 'Basic ' + auth);
  }

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
