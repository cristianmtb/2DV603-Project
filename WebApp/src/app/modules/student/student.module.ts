import {NgModule} from '@angular/core';
import {StudentComponent} from './student.component';
import {DocumentSubmitComponent} from '../../components/document-submit/document-submit.component';
import {SupervisorComponent} from './components/supervisor/supervisor.component';
import {UploadService} from "../../services/upload.service";
import {UserService} from "../../services/userService/user.service";
import {UsersService} from "../../services/userService/users.service";
import {DocumentService} from "../../services/documentService/document.service";
import {SharedModule} from "../../shared.module";
import {StudentRoutingModule} from "./student-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {DescriptionComponent} from "./components/description/description.component";

@NgModule({
  declarations: [
    StudentComponent,
    DocumentSubmitComponent,
    DescriptionComponent,
    SupervisorComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    StudentRoutingModule,
  ],
  providers: [
    UploadService,
    UserService,
    UsersService,
    DocumentService
  ],
  bootstrap: [
    StudentComponent,
  ]
})
export class StudentModule {
}
