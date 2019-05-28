import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatorComponent } from './coordinator.component';
import { UsersComponent } from './components/users/users.component';
import {PlansComponent} from "./components/plans/plans.component";
import {DescriptionsComponent} from "./components/descriptions/descriptions.component";
import {FinalReportsComponent} from "./components/final-reports/final-reports.component";


const routes: Routes = [
  {
    
    path: '',
    component: CoordinatorComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'descriptions',
    component: DescriptionsComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'finals',
    component: FinalReportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
