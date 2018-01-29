import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main',
        component: MainComponent,
        children: [
          {
            path: 'usuario',
            loadChildren: './usuario/usuario.module#UsuarioModule'
          },
          {
            path: 'disciplina',
            loadChildren: './disciplinas/disciplina.module#DisciplinaModule'
          },
          {
            path: 'relatorio',
            loadChildren: './relatorio/relatorio.module#RelatorioModule'
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
