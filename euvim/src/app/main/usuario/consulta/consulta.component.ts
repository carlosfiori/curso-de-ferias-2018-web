import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'login', 'email', 'perfil', 'actions'];
  dataSource = new MatTableDataSource<Usuario>(USUARIO_DATA);
  constructor() { }

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

const USUARIO_DATA: Usuario[] = [
  { id: 1, nome: 'Hydrogen', login: 'Hydrogen.login', email: 'Hydrogen@email.com', perfil: 'Admin' },
  { id: 2, nome: 'Helium', login: 'Helium.login', email: 'Helium@email.com', perfil: 'Aluno' },
  { id: 3, nome: 'Lithium', login: 'Lithium.login', email: 'Lithium@email.com', perfil: 'Professor' }
];
