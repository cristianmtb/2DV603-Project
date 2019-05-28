import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Deadline } from 'src/app/models/deadline';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userName = "nope";

  
  deadline:Deadline;

  constructor(private auth:AuthService, private doc:DocumentService)

  {
    this.userName = this.auth.getUserName();
  }

  ngOnInit() {
    //this.doc.getDoc();
    this.deadline=new Deadline( new Date() ,'');
    //console.log(this.deadline);
  }
 
}
