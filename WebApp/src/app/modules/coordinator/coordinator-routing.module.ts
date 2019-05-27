import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatorComponent } from './coordinator.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
    
    path: '',
    component: CoordinatorComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
