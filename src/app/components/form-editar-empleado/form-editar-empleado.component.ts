import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { EmpleadoDto } from '../../interfaces/dto/empleadoDto';

@Component({
  selector: 'app-form-editar-empleado',
  templateUrl: './form-editar-empleado.component.html',
  styles: [
  ]
})
export class FormEditarEmpleadoComponent implements OnInit {

  @Output()
  submit: EventEmitter<EmpleadoDto> = new EventEmitter<EmpleadoDto>();

  @Input()
  dto: EmpleadoDto;

  config = {
    format: 'YYYY-MM-DD',
    locale: 'es-MX'
  }

  constructor() {
    this.dto = {
      nombre_completo: '',
      puesto_trabajo: '',
      salario: 0.0,
      fecha_contratacion: '',
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submit.emit(this.dto);
  }


}
