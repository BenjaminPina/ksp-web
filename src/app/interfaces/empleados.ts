import { Empleado } from './empleado';

export interface Empleados {
  count:    number;
  next:     string;
  previous: string;
  results:  Empleado[];
}
