import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { JqueryService } from './shared/jquery.service';
import { AuthService } from './login/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  exibeMenu = false;

  constructor(
    private jqueryService: JqueryService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.jqueryService.ativaSideBar();
    this.authService.exibeMenuEmitter.subscribe(
      exibir => this.exibeMenu = exibir
    );
  }
}
