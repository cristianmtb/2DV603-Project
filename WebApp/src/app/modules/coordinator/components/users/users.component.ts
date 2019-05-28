import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from 'src/app/services/user/users.service';
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

  users: Array<User>;


  ngOnInit() {
    this.get();
  }

  add(user) {
    this.users.push(user);
  }

  get() {
    this.usersService.get()
      .subscribe(
        (data) => {
          this.users = data
        }, (error) => {

        });
  }

  openEditComponent(person: User) {

  }
}
