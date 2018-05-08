import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuarios/usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  returnUrl: string;
  erroLogin: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario, this.returnUrl || 'home');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => this.returnUrl = params['returnUrl']
    );
    this.authService.erroLogin.subscribe(erro => this.erroLogin = erro);
  }
}
