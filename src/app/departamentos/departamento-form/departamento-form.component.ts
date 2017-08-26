import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import { DepartamentosService } from './../departamentos.service';
import { Departamento } from './../departamento';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit, OnDestroy {

  departamento: Departamento;
  inscricao: Subscription;
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departamentosService: DepartamentosService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    if (this.formulario.valid) {
      this.departamentosService.saveDepartamento(this.departamento)
        .subscribe(departamento => {
          this.router.navigate([`/departamentos/${departamento.id}`]);
          this.departamentosService.sendRefreshDepartamentos();
      });
    }
  }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      data => this.departamento = data.departamento
    );
    if (this.departamento == null) {
      this.departamento = new Departamento(null, '', true);
    }

    this.formulario = this.formBuilder.group({
      descricao: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      ativo: [null, Validators.required]
    });

    /*this.formulario.setValue({
      descricao: this.departamento.descricao,
      ativo: this.departamento.ativo
    });*/
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
