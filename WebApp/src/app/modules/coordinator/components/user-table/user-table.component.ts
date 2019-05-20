import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import {User} from "../../../../models/user";


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(private uservice:UserService ) { }

  editField: string;
  personList: Array<User>;

  awaitingPersonList: Array<any> = [
    // {id: 6, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 7, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 8, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 9, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 10, userName: '', role: '', firstName: '', lastName: '', email: ''},


  ];


  ngOnInit() {
    this.uservice.getUsers().subscribe((data)=>{
      while(data == null)
      {
        ;
      }
      this.personList = this.uservice.toUser(data);
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


}
