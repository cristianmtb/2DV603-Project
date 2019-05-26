import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {UsersService} from 'src/app/services/userService/users.service';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-supervisor-table',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.scss']
})
export class SupervisorsComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  headElements = ['ID', 'First', 'Last', 'Handle'];
  searchText: string = '';
  previous: string;

  constructor(private usersService: UsersService) {
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  personList: Array<User>;


  ngOnInit() {
    this.usersService.get({roleId: 3})
      .subscribe(
        (data) => {
          this.personList = data
        }, (error) => {

        });

  }

  suggest() {


  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.personList = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.personList = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
