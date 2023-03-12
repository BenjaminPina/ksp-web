import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { EmpleadoDto } from '../interfaces/dto/empleadoDto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  urlApi: string;

  constructor(private readonly http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  cabecera(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }

  lista(page: Number = 1, search: string = ''): Observable<any> {
    const headers = this.cabecera();
    const params = new HttpParams()
      .set('page', page.toString())
      .set('ordering', 'nombre_completo');

    if (search != '') params.set('search', search);

    return this.http.get(`${this.urlApi}/empleados/`, { headers, params });
  }

  crear(dto: EmpleadoDto): Observable<any> {
    const headers = this.cabecera();

    return this.http.post(`${this.urlApi}/empleados/`, dto, { headers });
  }

  obtener(id: number): Observable<any> {
    const headers = this.cabecera();

    return this.http.get(`${this.urlApi}/empleados/${id}/`, { headers });
  }
}
