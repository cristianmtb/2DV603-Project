import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { RootComponent } from './components/root.component';
import { UserTableComponent } from './components/user-table/user-table.component';


@NgModule({
  declarations: [
    RootComponent,
    UserTableComponent,

  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule
  ],
})
export class CoordinatorModule { }
