import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

import { EmpleadosService } from '../../services/empleados.service';
import { Empleados } from '../../interfaces/empleados';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  pageSize = environment.pageSize;
  page: number;
  textoBusqueda: string = '';
  subscription: Subscription = new Subscription();
  empleados: Empleados = {count: 0, next: null, previous: null, results: []};

  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly empleadosService: EmpleadosService,
  ) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.getEmpleados(this.page, this.textoBusqueda);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  buscar(): void {
    console.log('buscar', this.page, this.textoBusqueda);
    this.getEmpleados(this.page, this.textoBusqueda);
  }

  pageChange(page: number): void {
    this.page = page;
    this.getEmpleados(page, this.textoBusqueda);
  }

  confirmDeleteEmpleado(id: number): void {
    swal.fire({
      title: '¿Eliminar empleado?',
      text: 'Confirma que deseas eliminar al empleado.',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar empleado',
      cancelButtonText: 'No, cancelar'
    }).then(
      result => {
        if (result.value) {
          this.deleteEmpleado(id);
        }
      }
    );
  }

  deleteEmpleado(id: number): void {
    this.spinner.show();
    const subscription = this.empleadosService.eliminar(id).subscribe(
      _ => {
        swal.fire(
          'Empleado eliminado',
          'El empleado fue eliminado correctamente',
          'success',
        );
        this.spinner.hide();
        this.getEmpleados(this.page, this.textoBusqueda);
      },
      err => {
        console.log(err);
        swal.fire(
          'Error',
          'Ocurrió un error al eliminar al empleado',
          'error'
        );
        this.spinner.hide();
      }
    );
    this.subscription.add(subscription);
  }

  getEmpleados(page: number, seach: string): void {
    this.spinner.show();
    const subscription = this.empleadosService.lista(page, seach).subscribe(
      resp => {
        this.empleados = resp;
        this.spinner.hide();
      },
      err => {
        console.log(err);
        swal.fire(
          'Error',
          'Ocurrió un error al recuperar los empleados',
          'error'
        );
        this.spinner.hide();
      }
    );
    this.subscription.add(subscription);
  }

}
