import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SupervisorComponent} from './supervisor.component';
import {ConfirmsComponent} from "./components/confirms/confirms.component";

const routes: Routes = [
  {
    path: '',
    component: SupervisorComponent
  },
  {
    path: 'confirms',
    component: ConfirmsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule {
}
