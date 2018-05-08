import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  formulario: FormGroup;
  usuario: Usuario;
  msg = '';
  erro = false;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    this.getUsuario();
    this.formulario = this.formBuilder.group({
      senhaAtual: ['', [
        Validators.required,
        Validators.min(6)
      ]],
      senha: ['', [
        Validators.required,
        Validators.min(6),
        this.novaSenhaDiferente
      ]],
      confirmaSenha: ['', [
        Validators.required,
        Validators.min(6),
        this.confirmaSenha
      ]]
    });
  }

  getUsuario() {
    this.usuarioService.getUsuarioLogado()
    .subscribe(usuario => this.usuario = usuario);
  }

  saveSenha() {
    if (this.formulario.valid) {
      this.usuario.senha = this.formulario.get('senha').value;
      this.usuario.senhaAtual = this.formulario.get('senhaAtual').value;
      this.usuarioService.saveSenha(this.usuario)
      .subscribe(() => {
        this.limpaForm();
        this.msg = 'Senha Alterada';
        this.erro = false;
      }, (erro) => {
        this.msg = 'Houve uma falha. Certifique-se de ter digitado a senha atual corretamente';
        console.log(erro);
        this.erro = true;
      });
    }
  }

  limpaForm() {
    this.formulario.reset({
      senhaAtual: '',
      senha: '',
      confirmaSenha: ''
    });
  }

  confirmaSenha(input: FormControl) {
    if (!input.root) {
      return null;
    }
    if (!input.root.get('senha')) {
      return null;
    }

    const senha = input.value;
    const confirmaSenha = input.root.get('senha').value;

    const exactMatch = senha === confirmaSenha;
    return exactMatch ? null : { senhasDivergentes: true };
  }

  novaSenhaDiferente(input: FormControl) {
    if (!input.root) {
      return null;
    }
    if (!input.root.get('senhaAtual')) {
      return null;
    }

    const senha = input.value;
    const senhaAtual = input.root.get('senhaAtual').value;

    const match = senha !== senhaAtual;
    return match ? null : { senhaRepetida: true };
  }

  validaInput(input: string) {
    const elemento = this.formulario.get(input);
    const valid = elemento.valid && elemento.touched;
    const invalid = elemento.invalid && elemento.touched;
    return {'valid': valid, 'invalid': invalid};
  }

}
