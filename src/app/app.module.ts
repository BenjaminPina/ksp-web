import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { EmpleadosService } from './services/empleados.service';
import { BeneficiariosService } from './services/beneficiarios.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PagesModule,
    ComponentsModule,
  ],
  providers: [
    EmpleadosService,
    BeneficiariosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
