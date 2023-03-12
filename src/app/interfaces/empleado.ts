export interface Empleado {
  id:                 number;
  nombre_completo:    string;
  puesto_trabajo:     string;
  salario:            number;
  fecha_contratacion: string;
  estatus:            boolean;
  foto:               null | string;
}
