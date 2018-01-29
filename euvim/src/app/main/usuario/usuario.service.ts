import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class UsuarioService {

  private mock = [
    { id: 1, nome: 'Hydrogen', login: 'Hydrogen.login', email: 'Hydrogen@email.com', perfil: 'Admin' },
    { id: 2, nome: 'Helium', login: 'Helium.login', email: 'Helium@email.com', perfil: 'Aluno' },
    { id: 3, nome: 'Lithium', login: 'Lithium.login', email: 'Lithium@email.com', perfil: 'Professor' }
  ]

  private _urlUsuario = environment.url + '/api/v1/usuarios'
  constructor(
    private _httpClient: HttpClient
  ) { }


  salvar(usuario) {
    return this._httpClient.post(
      this._urlUsuario,
      usuario,
      { responseType: 'text' }
    )
  }

  excluir(id) {
    return this._httpClient.delete(
      this._urlUsuario + '/' + id,
      { responseType: 'text' }
    )
  }

  editar(usuario) {
    return this._httpClient.put(
      this._urlUsuario + '/' + usuario.id,
      usuario,
      { responseType: 'text' })
  }

  carregar(id) {
    return this._httpClient.get<any>(this._urlUsuario + '/' + id)
  }

  listar() {
    return this._httpClient.get<Array<any>>(this._urlUsuario)
  }
}
