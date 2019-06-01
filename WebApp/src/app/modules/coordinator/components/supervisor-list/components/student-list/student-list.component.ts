import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {UsersService} from "../../../../../../services/user/users.service";
import {SupervisorService} from "../../../../../../services/user/supervisor.service";
import {AuthService} from "../../../../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Confirmation} from "../../../../../../models/confirmation";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  users: User[] = [];
  error = null;

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("userEdit") userEdit;

  constructor(private supervisorService: SupervisorService,
              private auth: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    if (!this.auth.isLoggedIn()) this.router.navigate(['login']);
    else {
      this.supervisorService.getSuggestions({supervisorId: this.auth.getCurrentUserId()})
        .subscribe(
          (data) => {
           // this.confirmationList = data;
          }, (error) => {
            this.error = error;
          });

    }

  }
getSupervisorid(user : User){

}

}
