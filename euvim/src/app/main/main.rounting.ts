import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'main',
        component: MainComponent,
        children: [
          {
            path: 'usuario/consulta',
            component: ConsultaComponent
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
