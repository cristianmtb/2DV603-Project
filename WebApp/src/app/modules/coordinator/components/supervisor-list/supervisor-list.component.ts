import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {UsersService} from "../../../../services/user/users.service";

@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss']
})
export class SupervisorListComponent implements OnInit {
  users: User[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("userEdit") userEdit;

  constructor(
    private usersService: UsersService
  ) {
  }


  ngOnInit() {
    this.get();
  }


  get() {
    this.usersService.get({roleId: 3})
      .subscribe(
        (data) => {
          this.users = data
        }, (error) => {

        });
  }


}
