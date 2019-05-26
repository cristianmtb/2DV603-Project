import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpponentRoutingModule } from './opponent-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    OpponentRoutingModule
  ]
})
export class OpponentModule { }
