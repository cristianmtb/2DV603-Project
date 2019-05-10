import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule
  ],
})
export class CoordinatorModule { }
