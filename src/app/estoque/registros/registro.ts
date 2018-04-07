import { Departamento } from './../../departamentos/departamento';
import { Cartucho } from '../../cartuchos/cartucho';
import { Usuario } from '../../usuarios/usuario';
import { Operacao } from './operacao';

export class Registro {

  constructor(
    public id: number,
    public cartucho: Cartucho,
    public departamento: Departamento,
    public quantidade: number,
    public data: number,
    public operacao: Operacao,
    public usuario: Usuario
  ) {}
}
