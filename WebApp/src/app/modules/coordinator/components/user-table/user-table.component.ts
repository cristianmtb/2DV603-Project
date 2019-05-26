import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  headElements = ['ID', 'First', 'Last', 'Handle'];
  searchText: string = '';
  previous: string;
  constructor(private uservice:UserService ) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }


  editField: string;
  personList: Array<User>;

  awaitingPersonList: Array<any> = [ ];


  ngOnInit() {
    this.uservice.getUsers().subscribe((data)=>{
      while(data == null)
      {
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

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
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
