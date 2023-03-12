import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
registerLocaleData(localeEs);
import { CommonModule } from '@angular/common';
import { FormCrearEmpleadoComponent } from './form-crear-empleado/form-crear-empleado.component';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';


@NgModule({
  declarations: [
    FormCrearEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DpDatePickerModule,
  ],
  exports: [
    FormCrearEmpleadoComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX'},
  ],
})
export class ComponentsModule { }
