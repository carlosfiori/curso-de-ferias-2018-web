import { FormularioComponent } from './usuario/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.rounting';

import {FlexLayoutModule} from '@angular/flex-layout'
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatButton, MatButtonModule, MatTableModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material'

import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule, HttpClient } from '@angular/common/http/';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRouting,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent],
  providers: [FormBuilder, UsuarioService, HttpClient]
})
export class MainModule { }
