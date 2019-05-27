import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { UserTableComponent } from './components/user-table/user-table.component';


const routes: Routes = [
  {
    
    path: '',
    component: RootComponent
  },
  {
    path: '/coordinator/users',
    component: UserTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
