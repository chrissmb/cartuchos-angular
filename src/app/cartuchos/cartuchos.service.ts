import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Cartucho } from './cartucho';
import * as global from '../shared/global';
import { AuthService } from '../login/auth.service';

@Injectable()
export class CartuchosService {

  private headers: Headers;
  private subject = new Subject();

  constructor(private http: Http, authService: AuthService) {
    this.headers = authService.getHeaders();
  }

  getCartuchosAtivos(): Observable<Cartucho[]> {
    return this.http
      .get(`${ global.enderecoSite }cartuchos`, { headers: this.headers })
      .map(response => response.json() as Cartucho[]);
  }

  getCartuchosTodos(): Observable<Cartucho[]> {
    return this.http
      .get(`${ global.enderecoSite }cartuchos/all`, { headers: this.headers })
      .map(response => response.json() as Cartucho[]);
  }

  getCartucho(id: number): Observable<Cartucho> {
    return this.http
      .get(`${ global.enderecoSite }cartuchos/${id}`, { headers: this.headers })
      .map(response => response.json() as Cartucho);
  }

  saveCartucho(cartucho: Cartucho): Observable<Cartucho> {
    if (cartucho == null) {
      return;
    }
    if (cartucho.id == null) {
      return this.http
        .post(`${ global.enderecoSite }cartuchos/`,
            JSON.stringify(cartucho), { headers: this.headers })
        .map(response => response.json() as Cartucho);
    } else {
      return this.http
        .put(`${ global.enderecoSite }cartuchos/${cartucho.id}`,
            JSON.stringify(cartucho), { headers: this.headers })
        .map(response => response.json() as Cartucho);
    }
  }

  sendRefreshCartuchos() {
    this.subject.next();
  }

  recieveRefreshCartuchos(): Observable<any> {
    return this.subject.asObservable();
  }

}
