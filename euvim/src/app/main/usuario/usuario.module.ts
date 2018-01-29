import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioRouting } from './usuario.routing';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule,
    UsuarioRouting,
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [HttpClient,UsuarioService, FormBuilder]
})
export class UsuarioModule { }
