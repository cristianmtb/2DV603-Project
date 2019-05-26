import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { RootComponent } from './components/root/root.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SubmitDocumentComponent } from './components/submit-document/submit-document.component';
import { SupervisorTableComponent } from './components/supervisor-table/supervisor-table.component';

@NgModule({
  declarations: [RootComponent, SubmitDocumentComponent, SupervisorTableComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MDBBootstrapModule,
  ],
})
export class StudentModule { }
