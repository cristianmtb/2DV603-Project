import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { CoordinatorComponent } from './coordinator.component';
import { UsersComponent } from './components/users/users.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddComponent} from "./components/users/components/add/add.component";
import {SharedModule} from "../../shared.module";
import {EditComponent} from "./components/users/components/edit/edit.component";



@NgModule({
  declarations: [
    CoordinatorComponent,
    UsersComponent,
    AddComponent,
    EditComponent,

  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class CoordinatorModule { }
