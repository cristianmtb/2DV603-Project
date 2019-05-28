import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ReaderComponent } from './reader.component';
import {ButtonsModule, CardsFreeModule, WavesModule} from "angular-bootstrap-md";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [ReaderComponent],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    CardsFreeModule,
    SharedModule,
    ButtonsModule,
    WavesModule
  ]
})
export class ReaderModule { }
