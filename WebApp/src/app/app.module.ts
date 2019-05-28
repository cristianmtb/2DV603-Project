import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {LoginComponent} from './components/login/login.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AuthService} from './services/auth/auth.service';
import {UsersService} from './services/userService/users.service';
import {SingupComponent} from "./components/signup/singup.component";
import {SharedModule} from "./shared.module";
import { SupervisorService } from './services/userService/supervisor.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    SingupComponent,
    HomePageComponent,
    NavbarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UsersService,
    SupervisorService
  ],
  exports: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
