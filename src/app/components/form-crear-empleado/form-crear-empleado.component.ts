import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmpleadoDto } from '../../interfaces/dto/empleadoDto';

@Component({
  selector: 'app-form-crear-empleado',
  templateUrl: './form-crear-empleado.component.html',
  styles: [
  ]
})
export class FormCrearEmpleadoComponent implements OnInit {

  @Output()
  submit: EventEmitter<FormData> = new EventEmitter<FormData>();

  dto: EmpleadoDto;
  imageFile: {link: string, file: any, name: string};

  constructor() {
    this.dto = {
      nombre_completo: '',
      puesto_trabajo: '',
      fecha_contratacion: '',
      salario: 0.0
    };
    this.imageFile = {link: '', file: null, name: ''};
  }

  ngOnInit(): void {
  }

  onSelectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (_event: any) => {
        this.imageFile = {
            link: _event.target.result,
            file: event.srcElement.files[0],
            name: event.srcElement.files[0].name
        };
    };
    reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(): void {
    const formData = new FormData();

    formData.append('nombre_completo', this.dto.nombre_completo);
    formData.append('puesto_trabajo', this.dto.puesto_trabajo);
    formData.append('fecha_contratacion', this.dto.fecha_contratacion);
    formData.append('salario', this.dto.salario.toString());

    if (this.imageFile.file) {
      formData.append('foto', this.imageFile.file);
    }

    this.submit.emit(formData);
  }

}
