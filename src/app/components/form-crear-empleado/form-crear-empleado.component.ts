import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';

import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as utc from 'dayjs/plugin/utc';

import { EmpleadoDto } from '../../interfaces/dto/empleadoDto';

@Component({
  selector: 'app-form-crear-empleado',
  templateUrl: './form-crear-empleado.component.html',
  styles: [
  ]
})
export class FormCrearEmpleadoComponent implements OnInit {

  @Output()
  submit: EventEmitter<EmpleadoDto> = new EventEmitter<EmpleadoDto>();

  dto: EmpleadoDto;

  config = {
    format: 'YYYY-MM-DD',
    locale: 'es-MX'
  }

  constructor() {
    dayjs.extend(customParseFormat);
    dayjs.extend(utc);

    this.dto = {
      nombre_completo: '',
      puesto_trabajo: '',
      fecha_contratacion: formatDate(new Date(), 'yyyy-MM-dd', 'es-MX'),
      salario: 0.0
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submit.emit(this.dto);
  }

}
