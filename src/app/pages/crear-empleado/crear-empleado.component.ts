import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

import { EmpleadosService } from '../../services/empleados.service';
import { EmpleadoDto } from '../../interfaces/dto/empleadoDto';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styles: [
  ]
})
export class CrearEmpleadoComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  constructor(
    private readonly router: Router,
    private readonly spinner: NgxSpinnerService,
    private readonly empleadosService: EmpleadosService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onSubmit(dto: EmpleadoDto): void {
    this.spinner.show()
    const subscription = this.empleadosService.crear(dto).subscribe(
      resp => {
        console.log(resp);
        swal.fire(
          'Empleado registrado',
          'El empleado fue registrado correctamente',
          'success',
        );
        this.spinner.hide();
        // this.router.navigate(['/editar/', 1]);
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

}
