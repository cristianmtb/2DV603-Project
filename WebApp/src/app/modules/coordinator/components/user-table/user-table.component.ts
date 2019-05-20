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
  personList: Array<User> = [
    {id: 1, username: 'aa224fn', roleID: 1, name: 'Ahmad', email: 'adadawda@gmail.com', password:"", coordinator:false, student:true, opponent:false, reader:false, supervisor:false},
    {id: 2, username: 'aa224fn', roleID: 1, name: 'Ahmad', email: 'adadawda@gmail.com', password:"", coordinator:false, student:true, opponent:false, reader:false, supervisor:false}, {id: 1, username: 'aa224fn', roleID: 4, name: 'Ahmad', email: 'adadawda@gmail.com', password:"", coordinator:false, student:true, opponent:false, reader:false, supervisor:false},



  ];

  awaitingPersonList: Array<any> = [
    // {id: 6, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 7, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 8, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 9, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 10, userName: '', role: '', firstName: '', lastName: '', email: ''},


  ];


  ngOnInit() {
    this.uservice.getUsers();
    // for (let i = 1; i <= 11; i++) {
    //   this.personList.push({
    //     id: i,
    //     firstName:'firstName' + i ,
    //     last: 'LastName ' + i,
    //     Role: 'role ' + i,
    //     userName: 'userName' + i,
    //     email:'email' + i
    //   });}
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
