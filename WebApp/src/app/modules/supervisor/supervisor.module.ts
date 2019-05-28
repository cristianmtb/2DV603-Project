import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupervisorRoutingModule} from './supervisor-routing.module';
import {SupervisorComponent} from './supervisor.component';
import {SharedModule} from "../../shared.module";
import {ButtonsModule, CardsFreeModule, TableModule, WavesModule} from "angular-bootstrap-md";
import { ConfirmsComponent } from './components/confirms/confirms.component';

@NgModule({
  declarations: [SupervisorComponent, ConfirmsComponent],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    SharedModule,
    CardsFreeModule,
    ButtonsModule,
    WavesModule,
    TableModule
  ]
})
export class SupervisorModule {
}
