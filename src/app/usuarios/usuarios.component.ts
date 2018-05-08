import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      senhAtual: ['', [
        Validators.required,
        Validators.min(6)
      ]],
      senha: ['', [
        Validators.required,
        Validators.min(6)
      ]]
    });
  }

}
