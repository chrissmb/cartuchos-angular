import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as global from '../shared/global';
import { Usuario } from '../usuarios/usuario';

@Injectable()
export class AuthService {

  autenticado = false;
  private headers = new Headers({'Content-Type': 'application/json'});
  usuarioLogado: Usuario;

  constructor(
    private router: Router,
    private http: Http
  ) { }

  fazerLogin(usuario: Usuario) {
    const auth = window.btoa('chris:123456');
    this.headers.append('Authorization', 'Basic ' + auth);
    const observable = this.http
        .get(`${ global.enderecoSite }usuarios/logado`, { headers: this.headers })
        .map(response => response.json() as Usuario);
    observable.subscribe(user => {
      if (user != null) {
        this.autenticado = true;
        this.usuarioLogado = user;
        console.log(user);
      }
    });
  }
}
