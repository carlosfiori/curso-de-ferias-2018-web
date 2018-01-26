import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'login', 'email', 'perfil', 'actions'];
  dataSource = null;
  service: UsuarioService

  constructor(private _usuarioService: UsuarioService) {
    this.dataSource = new MatTableDataSource(this._usuarioService.listar());
  }

  ngOnInit() {
  }

  editar(id: number) {
    console.log(id);
  }

  remover(id: number) {
    this.dataSource.data = this.dataSource.data.filter(user => user.id !== id);
  }
}

export interface Usuario {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}
