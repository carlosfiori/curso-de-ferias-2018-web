import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.rounting';

import {FlexLayoutModule} from '@angular/flex-layout'
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatButton, MatButtonModule } from '@angular/material'
import { ConsultaComponent } from './usuario/consulta/consulta.component';


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
    MatButtonModule
  ],
  declarations: [MainComponent, ConsultaComponent]
})
export class MainModule { }
