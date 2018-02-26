import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as global from '../shared/global';
import { AuthService } from '../login/auth.service';
import { Registro } from './usuario';

@Injectable()
export class UsuariosService {

  private headers: Headers;
  private subject = new Subject();

  constructor(private http: Http, authService: AuthService) {
    this.headers = authService.getHeaders();
  }

  getUsuarioLogado(): Observable<Usuario> {
    return this.http
      .get(`${ global.enderecoSite }usuarios/logado`, { headers: this.headers })
      .map(response => response.json() as Usuario);
  }
}
