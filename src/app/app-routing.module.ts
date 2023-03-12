import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { EmpleadoEditarComponent } from './pages/empleado-editar/empleado-editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: CrearEmpleadoComponent },
  { path: 'editar/:id', component: EmpleadoEditarComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
