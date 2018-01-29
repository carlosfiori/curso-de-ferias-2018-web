import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'consulta',
        component: ConsultaComponent
      },
      {
        path: 'adicionar',
        component: FormularioComponent
      },
      {
        path: 'editar/:id',
        component: FormularioComponent
      }
    ])
  ]
})
export class UsuarioRouting { }
