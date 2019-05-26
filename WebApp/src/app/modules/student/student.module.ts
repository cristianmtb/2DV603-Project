import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { RootComponent } from './components/root/root.component';
import { SubmitDocumentComponent } from './components/submit-document/submit-document.component';

@NgModule({
  declarations: [RootComponent, SubmitDocumentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
})
export class StudentModule { }
