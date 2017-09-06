import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-dropdown-usuario',
  templateUrl: './dropdown-usuario.component.html',
  styleUrls: ['./dropdown-usuario.component.css']
})
export class DropdownUsuarioComponent implements OnInit {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.fazerLogout();
  }

  ngOnInit() {
  }

}
