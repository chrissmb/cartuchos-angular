import { Departamento } from './../../departamentos/departamento';
import { Cartucho } from '../../cartuchos/cartucho';
import { Usuario } from '../../usuarios/usuario';
import { Operacao } from './operacao';

export class Registro {
  id: number;
  cartucho: Cartucho;
  departamento: Departamento;
  quantidade: number;
  data: number;
  operacao: Operacao;
  usuario: Usuario;

  constructor() {}
}
