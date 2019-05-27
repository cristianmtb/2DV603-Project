import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { RootComponent } from './components/root/root.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule} from "@angular/forms";
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    RootComponent,
    UserTableComponent,
    AddUserComponent,

  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    MDBBootstrapModule,
    FormsModule
  ],
})
export class CoordinatorModule { }
