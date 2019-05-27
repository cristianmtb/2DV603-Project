import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {UsersService} from 'src/app/services/userService/users.service';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {Observable} from "rxjs";


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  searchText: string = '';
  previous: string;
  private person = new User();

  constructor(private usersService: UsersService) {
  }

  // @HostListener('input') oninput() {
  //   this.searchItems();
  // }


  editField: string;
  personList: Array<User>;


  ngOnInit() {
    this.usersService.get()
      .subscribe(
        (data) => {
          this.personList = data
        }, (error) => {

        });


  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  add(user) {

    this.personList.push(user);




  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  // searchItems() {
  //   const prev = this.mdbTable.getDataSource();
  //
  //   if (!this.searchText) {
  //     this.mdbTable.setDataSource(this.previous);
  //     this.personList = this.mdbTable.getDataSource();
  //   }
  //
  //   if (this.searchText) {
  //     this.personList = this.mdbTable.searchLocalDataBy(this.searchText);
  //     this.mdbTable.setDataSource(prev);
  //   }
  // }


}
