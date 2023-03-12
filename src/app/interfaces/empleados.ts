import { Empleado } from './empleado';

export interface Empleados {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Empleado[];
}
