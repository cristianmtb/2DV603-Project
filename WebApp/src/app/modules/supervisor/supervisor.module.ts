import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupervisorRoutingModule} from './supervisor-routing.module';
import {SupervisorComponent} from './supervisor.component';
import {SharedModule} from "../../shared.module";
import {CardsFreeModule} from "angular-bootstrap-md";

@NgModule({
  declarations: [SupervisorComponent],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    SharedModule,
    CardsFreeModule
  ]
})
export class SupervisorModule {
}
