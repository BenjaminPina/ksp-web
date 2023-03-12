import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ComponentsModule } from '../components/components.module';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    CrearEmpleadoComponent,
    EmpleadoEditarComponent,
    EmpleadoDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    NgbModule,
    NgbPaginationModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
