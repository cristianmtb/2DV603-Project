import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {SubmitDocumentComponent} from './components/submit-document/submit-document.component';
import {SupervisorsComponent} from './components/supervisors/supervisors.component';

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
    component: SupervisorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
