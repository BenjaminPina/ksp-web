import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

import { Empleado } from '../../interfaces/empleado';
import { EmpleadosService } from '../../services/empleados.service';
import { EmpleadoDto } from '../../interfaces/dto/empleadoDto';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styles: [
  ]
})
export class EmpleadoEditarComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  empleado: Empleado;
  dto: EmpleadoDto;
  id: number = 0;

  constructor(
    private readonly router: Router,
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
    this.dto = {
      nombre_completo: '',
      puesto_trabajo: '',
      salario: 0.0,
      fecha_contratacion: ''
    };
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getEmpleado(this.id);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onSubmit(dto: EmpleadoDto): void {
    this.spinner.show()
    const subscription = this.empleadosService.actualizar(this.id, dto).subscribe(
      resp => {
        console.log(resp);
        swal.fire(
          'Empleado actualizado',
          'El empleado fue actualizado correctamente',
          'success',
        );
        this.spinner.hide();
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        swal.fire(
          'Error',
          'Error al registrar empleado',
          'error',
        );
        this.spinner.hide();
      }
    );

    this.subscription.add(subscription);
  }

  getEmpleado(id: number): void {
    this.spinner.show();

    const subscription = this.empleadosService.obtener(id).subscribe(
      resp => {
        this.empleado = resp;
        this.dto = {
          nombre_completo: this.empleado.nombre_completo,
          puesto_trabajo: this.empleado.puesto_trabajo,
          salario: this.empleado.salario,
          fecha_contratacion: this.empleado.fecha_contratacion,
        };
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
