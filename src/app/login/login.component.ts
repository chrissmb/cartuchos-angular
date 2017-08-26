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

  constructor(private authService: AuthService) { }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

  ngOnInit() {
  }

}
