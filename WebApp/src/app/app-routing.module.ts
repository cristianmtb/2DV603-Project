import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SingupPageComponent } from './components/singup-page/singup-page.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'singup', component: SingupPageComponent},
  {path: '', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
