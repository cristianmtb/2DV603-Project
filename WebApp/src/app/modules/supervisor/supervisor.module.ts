import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupervisorRoutingModule} from './supervisor-routing.module';
import {SupervisorComponent} from './supervisor.component';
import {SharedModule} from "../../shared.module";
import {ButtonsModule, CardsFreeModule, TableModule, WavesModule} from "angular-bootstrap-md";
import { ConfirmsComponent } from './components/confirms/confirms.component';
import { PlansComponent } from './components/plans/plans.component';
import { AssesmentsComponent } from './components/assesments/assesments.component';
import {StudentModule} from "../student/student.module";

@NgModule({
  declarations: [SupervisorComponent, ConfirmsComponent, PlansComponent, AssesmentsComponent],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    SharedModule,
    CardsFreeModule,
    ButtonsModule,
    WavesModule,
    TableModule,
    StudentModule
  ]
})
export class SupervisorModule {
}
