import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from './student.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SubmitDocumentComponent} from './components/submit-document/submit-document.component';
import {SupervisorsComponent} from './components/supervisors/supervisors.component';
import {UploadService} from "../../services/upload.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../services/userService/user.service";
import {UsersService} from "../../services/userService/users.service";
import {DocumentService} from "../../services/documentService/document.service";

@NgModule({
  declarations: [
    StudentComponent,
    SubmitDocumentComponent,
    SupervisorsComponent],
  imports: [
    FormsModule,
    CommonModule,
    StudentRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
  ],
  providers: [UploadService, UserService, UsersService, DocumentService],

})
export class StudentModule {
}
