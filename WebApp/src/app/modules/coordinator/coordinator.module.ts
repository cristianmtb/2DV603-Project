import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { RootComponent } from './components/root.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    RootComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule
  ],
})
export class CoordinatorModule { }
