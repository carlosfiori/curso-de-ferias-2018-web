import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'login', 'email', 'perfil', 'actions'];
  dataSource = null;
  service: UsuarioService

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.obterLista();
  }

  private obterLista() {
    this._usuarioService.listar().subscribe(success => {
      this.dataSource = new MatTableDataSource(success);
    })
  }

  editar(id: number) {
    this._router.navigate(['main/usuario/editar', id])
  }

  remover(id: number) {
    this._usuarioService.excluir(id).subscribe(suc => {
      this.obterLista();
    })
  }
}

export interface Usuario {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}
