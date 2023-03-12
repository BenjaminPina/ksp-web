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
  subscription: Subscription = new Subscription();
  empleados: Empleados = {count: 0, next: null, previous: null, results: []};

  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly empleadosService: EmpleadosService,
  ) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.getEmpleados(this.page, '');
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  pageChange(page: number): void {
    this.page = page;
  }

  getEmpleados(page: number, seach: string): void {
    this.spinner.show();
    const subscription = this.empleadosService.lista(page, seach).subscribe(
      resp => {
        this.empleados = resp;
        console.log(this.empleados);
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
