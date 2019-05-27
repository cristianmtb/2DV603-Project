import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {SubmitDocumentComponent} from './components/description/submit-document.component';
import {SupervisorComponent} from './components/supervisor/supervisor.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'submit',
    component: SubmitDocumentComponent
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
