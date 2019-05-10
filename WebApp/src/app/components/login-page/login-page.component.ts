import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
    console.log('in');
  }

  login() 
  {
    console.log('button works');
    if(this.auth.login("admind", "admin") == true)
    {
      console.log("login works");
    }
  }

}
