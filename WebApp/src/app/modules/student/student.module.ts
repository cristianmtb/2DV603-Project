import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentRoutingModule} from './student-routing.module';
import {RootComponent} from './components/root/root.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SubmitDocumentComponent} from './components/submit-document/submit-document.component';
import {SupervisorTableComponent} from './components/supervisors/supervisor-table.component';
import {UploadService} from "../../services/upload.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RootComponent,
    SubmitDocumentComponent,
    SupervisorTableComponent],
  imports: [
    FormsModule,
    CommonModule,
    StudentRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
  ],
  providers: [UploadService],

})
export class StudentModule {
}
