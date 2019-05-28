import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpponentRoutingModule } from './opponent-routing.module';
import { OpponentComponent } from './opponent.component';
import {ButtonsModule, CardsFreeModule, WavesModule} from "angular-bootstrap-md";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [OpponentComponent],
  imports: [
    CommonModule,
    OpponentRoutingModule,
    CardsFreeModule,
    ButtonsModule,
    WavesModule,
    SharedModule
  ]
})
export class OpponentModule { }
