import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SingupPageComponent } from './components/singup-page/singup-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    SingupPageComponent,
    HomePageComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
