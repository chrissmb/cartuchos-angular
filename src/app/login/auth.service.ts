import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

import * as global from '../shared/global';
import { Usuario } from '../usuarios/usuario';

@Injectable()
export class AuthService {

  private autenticado = false;
  private headers: Headers;
  exibeMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: Http
  ) { }

  fazerLogin(usuario: Usuario, returnUrl: string) {
    this.headers = this.criaHeaders(usuario);
    const observable = this.http
        .get(`${ global.enderecoSite }usuarios/logado`, { headers: this.headers })
        .map(response => response.json() as Usuario);
    observable.subscribe(user => {
      if (user != null) {
        this.autenticado = true;
        this.exibeMenuEmitter.emit(true);
        this.router.navigate([returnUrl]);
      } else {
        this.exibeMenuEmitter.emit(false);
        this.autenticado = false;
      }
    });
  }

  fazerLogout() {
    this.router.navigate(['/login']);
    window.location.reload();
  }

  private criaHeaders(usuario: Usuario): Headers {
    const auth = window.btoa(`${usuario.username}:${usuario.senha}`);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Basic ' + auth);
    return headers;
  }

  getHeaders(): Headers {
    return this.headers;
  }

  estaAutenticado() {
    return this.autenticado;
  }
}
