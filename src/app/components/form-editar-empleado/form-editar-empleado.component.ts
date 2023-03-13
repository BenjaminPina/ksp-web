import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

import { EmpleadoDto } from '../../interfaces/dto/empleadoDto';
import { environment } from 'src/environments/environment';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-form-editar-empleado',
  templateUrl: './form-editar-empleado.component.html',
  styles: [
  ]
})
export class FormEditarEmpleadoComponent implements OnInit, OnDestroy {

  @Output()
  submit: EventEmitter<EmpleadoDto> = new EventEmitter<EmpleadoDto>();

  @Input()
  dto: EmpleadoDto;

  @Input()
  foto: string | null;

  @Input()
  id: number = 0;

  config = {
    format: 'YYYY-MM-DD',
    locale: 'es-MX'
  }

  subscription: Subscription = new Subscription();

  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly empleadosService: EmpleadosService
  ) {
    this.dto = {
      nombre_completo: '',
      puesto_trabajo: '',
      salario: 0.0,
      fecha_contratacion: '',
    }
    this.foto = null;
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.submit.emit(this.dto);
  }

  subirFoto(event: any):void {
    this.spinner.show()

    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('foto',file);

      const subscription = this.empleadosService.subirFoto(this.id, formData).subscribe(
        _ => {
          this.spinner.hide();
          window.location.reload();
        },
        err => {
          console.log(err);
          swal.fire(
            'Error',
            'OCurrió un error al subir la foto',
            'error',
          );
          this.spinner.hide();
        }
      );
      this.subscription.add(subscription);
    } else {
      this.spinner.hide();
    }
  }

}
