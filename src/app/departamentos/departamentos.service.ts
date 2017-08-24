import { Injectable } from '@angular/core';

@Injectable()
export class DepartamentosService {

  constructor() { }

  getDepartamentos() {
    let dpt1 = {
      id: 1,
      descricao: "Administração",
      ativo: true
    };
    let dpt2 = {
      id: 2,
      descricao: "TI",
      ativo: true
    };
    let dpt3 = {
      id: 3,
      descricao: "RH",
      ativo: false
    };
    let dpt4 = {
      id: 1,
      descricao: "Contabilidae",
      ativo: true
    };
    return [dpt1, dpt2, dpt3, dpt4];
  }
}
