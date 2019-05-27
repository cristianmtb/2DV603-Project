import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from 'src/app/services/userService/users.service';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";


@Component({
  selector: 'user-table',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  private person = new User();

  constructor(
    private usersService: UsersService
  ) {
  }

  personList: Array<User>;


  ngOnInit() {
    this.get();
  }

  add(user) {
    this.personList.push(user);
  }

  get() {
    this.usersService.get()
      .subscribe(
        (data) => {
          this.personList = data
        }, (error) => {

        });

  }
}
