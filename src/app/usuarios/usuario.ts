import { Role } from './role';

export class Usuario {

  id: number;
  username: string;
  senha: string;
  senhaAtual: string;
  role: Role;
}
