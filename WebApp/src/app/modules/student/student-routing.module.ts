import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './components/root/root.component';
import {SubmitDocumentComponent} from './components/submit-document/submit-document.component';
import {SupervisorTableComponent} from './components/supervisors/supervisor-table.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  {
    path: 'submit',
    component: SubmitDocumentComponent
  },
  {
    path: 'supervisor',
    component: SupervisorTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
