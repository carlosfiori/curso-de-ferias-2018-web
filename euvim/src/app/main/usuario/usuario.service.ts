import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  private mock = [
    { id: 1, nome: 'Hydrogen', login: 'Hydrogen.login', email: 'Hydrogen@email.com', perfil: 'Admin' },
    { id: 2, nome: 'Helium', login: 'Helium.login', email: 'Helium@email.com', perfil: 'Aluno' },
    { id: 3, nome: 'Lithium', login: 'Lithium.login', email: 'Lithium@email.com', perfil: 'Professor' }
  ];

  constructor() { }


  adicionar(usuario) {
    let idInsert = 0;
    this.mock.forEach(
      item => {
        idInsert = idInsert < item.id ? item.id : idInsert
      }
    )

    usuario.id = idInsert++;
    this.mock.push(usuario)
  }

  excluir(id) {
    this.mock = this.mock.filter(
      item => item.id !== id
    )

  }

  editar(usuario) {
    let index = this.mock.findIndex(
      item => item.id === usuario.id
    )

    if (index > -1) {
      this.mock[index] = usuario
    }
  }

  carregar(id) {
    return this.mock.find(item => item.id === id);
  }

  listar() {
    return this.mock;
  }
}
