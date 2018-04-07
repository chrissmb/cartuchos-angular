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

  getRegistros(page: number, size: number): Observable<any> {
    return this.http
      .get(`${ global.enderecoSite }registros/pageable?page=${ page }&size=${ size }`,
      { headers: this.headers })
      .map(response => response.json());
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
