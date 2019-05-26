import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/services/userService/user.service';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {forEach} from "@angular/router/src/utils/collection";
import {element} from "protractor";


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  searchText: string = '';
  previous: string;
  private person = new User("", "", "", "", "", false, true, false, false, false);
  show: boolean = false;
  constructor(private uservice: UserService, private us: UserService) {
  }

  // @HostListener('input') oninput() {
  //   this.searchItems();
  // }


  editField: string;
  personList: Array<User>;



  ngOnInit() {
    this.uservice.getUsers().subscribe((data) => {
      while (data == null) {
        ;
      }
      this.personList = this.uservice.toUser(data);
      console.log(data);
    });


  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  add() {

    this.personList.push(this.person);

    this.show = true;


  }

  confirmAdd(id: number) {
    this.us.addUser(this.personList[id]).subscribe(
      (next) => {

      },
      (error) => {

      }
    );
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
