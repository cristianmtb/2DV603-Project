import {Component, OnInit} from '@angular/core';
import {UsersService} from 'src/app/services/user/users.service';
import {User} from 'src/app/models/user';
import {SupervisorService} from "../../../../services/user/supervisor.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-supervisor-table',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  personList: User[] = [];
  personId = 0;
  error = null;

  constructor(private usersService: UsersService,
              private SupervisorService: SupervisorService,
              private authService: AuthService,
  ) {
  }


  ngOnInit() {
    this.usersService.get({roleId: 3})
      .subscribe(
        (data) => {
          this.personList = data;
        }, (error) => {
          this.error = error;
        });
  }

  onChecked(person) {
    this.error = null;
    this.personId = person.id;
  }

  suggest() {
    if (this.personId === 0) {
      this.error = 'Please select a supervisor';
      return;
    }
    this.error = null;

    this.SupervisorService.suggest({
      supervisorId: this.personId,
      studentId: this.authService.getCurrentUserId(),
    })
      .subscribe((next) => {


      }, (error) => {
        this.error = error;
      });

  }


}
