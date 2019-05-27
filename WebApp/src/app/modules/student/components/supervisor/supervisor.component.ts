import {Component, OnInit} from '@angular/core';
import {UsersService} from 'src/app/services/userService/users.service';
import {User} from 'src/app/models/user';
import {UserService} from "../../../../services/userService/user.service";

@Component({
  selector: 'app-supervisor-table',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  personList: User[] = [];

  constructor(private usersService: UsersService,
              private userService: UserService,
  ) {
  }


  ngOnInit() {
    this.usersService.get({roleId: 3})
      .subscribe(
        (data) => {
          this.personList = data
        }, (error) => {

        });

  }

  suggest() {
    this.userService.suggest(1)
      .subscribe((next) => {

      }, (error) => {
        
      })

  }


}
