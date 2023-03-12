import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCrearEmpleadoComponent } from './form-crear-empleado/form-crear-empleado.component';
import { FormsModule } from '@angular/forms';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    FormCrearEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
  ],
  exports: [
    FormCrearEmpleadoComponent,
  ]
})
export class ComponentsModule { }
