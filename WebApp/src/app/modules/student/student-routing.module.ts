import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {SupervisorComponent} from './components/supervisor/supervisor.component';
import {DescriptionComponent} from "./components/description/description.component";

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'description',
    component: DescriptionComponent
  },
  {
    path: 'supervisor',
    component: SupervisorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
