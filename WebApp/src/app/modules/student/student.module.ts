import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { RootComponent } from './components/root/root.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MDBBootstrapModule,
  ],
})
export class StudentModule { }
