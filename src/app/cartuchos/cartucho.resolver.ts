import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Cartucho } from './cartucho';
import { CartuchosService } from './cartuchos.service';

@Injectable()
export class CartuchoResolver implements Resolve<Cartucho> {

  constructor(private cartuchosService: CartuchosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params['id'];
    return this.cartuchosService.getCartucho(id);
  }
}
