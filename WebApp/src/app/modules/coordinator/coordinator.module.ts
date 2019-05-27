import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { RootComponent } from './components/root/root.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddComponent} from "./components/add/add.component";



@NgModule({
  declarations: [
    RootComponent,
    UserTableComponent,
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
