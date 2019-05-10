import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userName = "nope";
  constructor(private auth:AuthService) 
  { 
    this.userName = this.auth.getUserName();
  }

  ngOnInit() {
  }

}
