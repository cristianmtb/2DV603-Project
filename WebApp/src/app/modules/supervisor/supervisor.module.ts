import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    SupervisorRoutingModule
  ]
})
export class SupervisorModule { }
