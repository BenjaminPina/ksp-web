import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCrearEmpleadoComponent } from './form-crear-empleado/form-crear-empleado.component';



@NgModule({
  declarations: [
    FormCrearEmpleadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormCrearEmpleadoComponent,
  ]
})
export class ComponentsModule { }
