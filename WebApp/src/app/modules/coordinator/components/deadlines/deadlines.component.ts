import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user";

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss']
})
export class DeadlinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openEditComponent(user: User) {
   // this.userEdit.show(user);
  }
}
