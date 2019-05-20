import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Deadline } from 'src/app/models/deadline';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userName = "nope";
  deadline:Deadline;
  constructor(private auth:AuthService)
  {
    this.userName = this.auth.getUserName();
  }

  ngOnInit() {
    //deadline=new Deadline()
  }

}
