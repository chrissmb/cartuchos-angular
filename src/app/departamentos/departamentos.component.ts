import { Component, OnInit } from '@angular/core';

import { DepartamentosService } from './departamentos.service';
import { Departamento } from './departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  departamentos: Departamento[];
  consultaInativos = false;

  constructor(private departamentosService: DepartamentosService) { }

  ngOnInit() {
    this.departamentos = this.departamentosService.getDepartamentos();
  }

}
