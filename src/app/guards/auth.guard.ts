import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
    Router, CanLoad, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaAcesso(state.url);
  }

  private verificaAcesso(urlAtual) {
    if (this.authService.estaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: urlAtual }});
    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.verificaAcesso(document.location.pathname);
  }
}
