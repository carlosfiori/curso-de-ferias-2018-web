import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MainComponent } from './main.component';
import { MainRouting } from './main.rounting';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MainRouting,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  declarations: [MainComponent]
})
export class MainModule { }
