import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Departamento } from './departamento';
import { DepartamentosService } from './departamentos.service';

@Injectable()
export class DepartamentoResolver implements Resolve<Departamento> {

  constructor(private departamentosService: DepartamentosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params['id'];
    return this.departamentosService.getDepartamento(id);
  }
}
