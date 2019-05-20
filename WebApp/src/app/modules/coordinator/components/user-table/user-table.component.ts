import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(private uservice:UserService ) { }

  ngOnInit() {
    this.uservice.getUsers();
  }


}
