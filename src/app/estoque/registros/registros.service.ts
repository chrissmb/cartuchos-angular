import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as global from '../../shared/global';
import { AuthService } from '../../login/auth.service';
import { Registro } from './registro';

@Injectable()
export class RegistrosService {

  private headers: Headers;
  private subject = new Subject();

  constructor(private http: Http, authService: AuthService) {
    this.headers = authService.getHeaders();
  }

  getRegistros(page: number, size: number, dataInicio: string, dataFim: string): Observable<any> {
    let url = `${ global.enderecoSite }registros/pageable?page=${ page }&size=${ size }`;
    if (dataInicio != null && dataFim != null) {
      url = url + `&dtinicio=${ dataInicio }&dtfim=${ dataFim }`;
    }
    return this.http.get(url, { headers: this.headers }).map(response => response.json());
  }

  getRegistro(id: number): Observable<Registro[]> {
    return this.http
      .get(`${ global.enderecoSite }registros/${id}`, { headers: this.headers })
      .map(response => response.json() as Registro[]);
  }

  saveRegistro(registro: Registro): Observable<Registro> {
    if (registro == null) {
      return;
    }
    return this.http
      .post(`${ global.enderecoSite }registros`,
          JSON.stringify(registro), { headers: this.headers })
      .map(response => response.json() as Registro);
  }

}
