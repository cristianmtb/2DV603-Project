import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {UsersService} from "../../../../services/user/users.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  users: User[] = [];
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("roleSet") roleSet;


  constructor(
    private usersService: UsersService
  ) {
  }


  ngOnInit() {
    this.get();
  }

  get() {
    this.usersService.get()
      .subscribe(
        (data) => {
          this.users = data
        }, (error) => {

        });
  }
  openGradeComponent(item) {
    this.roleSet.show(item);
  }

  set(user) {

  }

}
