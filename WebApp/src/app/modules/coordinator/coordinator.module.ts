import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { CoordinatorComponent } from './coordinator.component';
import { UsersComponent } from './components/users/users.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddComponent} from "./components/add/add.component";



@NgModule({
  declarations: [
    CoordinatorComponent,
    UsersComponent,
    AddComponent,

  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CoordinatorModule { }
