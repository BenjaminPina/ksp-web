import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class SharedModule { }
