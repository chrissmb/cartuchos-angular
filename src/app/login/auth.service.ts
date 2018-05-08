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
  erroLogin = new EventEmitter<string>();

  constructor(
    private router: Router,
    private http: Http
  ) { }

  fazerLogin(usuario: Usuario, returnUrl: string) {
    this.http
        .post(`${ global.enderecoSite }xlogin`, JSON.stringify(usuario))
        .map(response => response)
        .subscribe(res => {
          const authorization = res.headers.get('Authorization');
          const authArray = authorization.split(' ');
          const token = authArray[1];
          this.headers = this.criaHeaders(token);
          this.http
              .get(`${ global.enderecoSite }usuarios/logado`, { headers: this.headers })
              .map(response => response.json() as Usuario)
              .subscribe(user => {
                if (user != null) {
                  this.autenticado = true;
                  this.exibeMenuEmitter.emit(true);
                  this.router.navigate([returnUrl]);
                } else {
                  this.exibeMenuEmitter.emit(false);
                  this.autenticado = false;
                }
              }, () => this.erroLogin.emit('Falha na autênticação'));
        }, () => this.erroLogin.emit('Falha na autênticação'));
  }

  fazerLogout() {
    this.router.navigate(['/login']);
    window.location.reload();
  }

  private criaHeaders(token: string): Headers {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', token);
    return headers;
  }

  getHeaders(): Headers {
    return this.headers;
  }

  estaAutenticado() {
    return this.autenticado;
  }
}
