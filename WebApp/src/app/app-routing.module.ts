import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SingupPageComponent } from './components/singup-page/singup-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'singup', component: SingupPageComponent},
  {path: '', component: HomePageComponent},
  {
    path: "coordinator",
    loadChildren: "./modules/coordinator/coordinator.module#CoordinatorModule"
  },
  {
    path: "student",
    loadChildren: "./modules/student/student.module#StudentModule"
  },
  {
    path: "supervisor",
    loadChildren: "./modules/supervisor/supervisor.module#SupervisorModule"
  },
  {
    path: "opponent",
    loadChildren: "./modules/opponent/opponent.module#OpponentModule"
  },
  {
    path: "reader",
    loadChildren: "./modules/reader/reader.module#ReaderModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
