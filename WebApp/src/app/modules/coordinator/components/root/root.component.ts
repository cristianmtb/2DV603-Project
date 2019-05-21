import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() 
  {
    if(this.auth.isCoordinator() === false)
    {
      this.router.navigate(["login"]);
    }
  }

}
