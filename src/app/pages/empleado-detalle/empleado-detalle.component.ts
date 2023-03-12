import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

import { Empleado } from '../../interfaces/empleado';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styles: [
  ]
})
export class EmpleadoDetalleComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  empleado: Empleado;
  id: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly empleadosService: EmpleadosService,
  ) {
    this.empleado = {
      id: 0,
      nombre_completo: '',
      puesto_trabajo: '',
      salario: 0.0,
      fecha_contratacion: '',
      estatus: true,
      foto: null,
    };
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getEmpleado(this.id);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  getEmpleado(id: number): void {
    this.spinner.show();

    const subscription = this.empleadosService.obtener(id).subscribe(
      resp => {
        this.empleado = resp;
        this.spinner.hide();
      },
      err => {
        swal.fire(
          'Error',
          'Error al recuperar empleado',
          'error',
        );
        console.log(err);
        this.spinner.hide();
      }
    );

    this.subscription.add(subscription);
  }

}
