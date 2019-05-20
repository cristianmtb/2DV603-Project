import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private auth:AuthService, 
    

    ) { }
  ngOnInit() {

  }
  username:string ="";
  password:string = "";
  login() 
  {
    this.auth.login(this.username,this.password )
  }

}
