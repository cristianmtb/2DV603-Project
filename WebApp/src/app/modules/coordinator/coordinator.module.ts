import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { RootComponent } from './components/root.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RootComponent,
    UserTableComponent,

  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    MDBBootstrapModule,
    FormsModule
  ],
})
export class CoordinatorModule { }
