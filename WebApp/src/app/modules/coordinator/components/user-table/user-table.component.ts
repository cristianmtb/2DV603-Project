import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor() {
  }

  editField: string;
  personList: Array<any> = [
    {id: 1, userName: 'aa224fn', role: 'Student', firstName: 'Ahmad', lastName: 'AR', email: 'adadawda@gmail.com'},
    {id: 2, userName: 'cb224fn', role: 'Student', firstName: 'cris', lastName: 'babes', email: 'adadadadadada'},
    {id: 3, userName: 'as224zk', role: 'Student', firstName: 'ahmad', lastName: 'sadia', email: ''},
    {id: 4, userName: 'ch223tf', role: 'Student', firstName: 'ceasaer', lastName: 'alhawi', email: ''},
    {id: 5, userName: 'bitch', role: 'bitch', firstName: 'bitch', lastName: 'bitch', email: 'bitch@hotmai.com'},
  ];

  awaitingPersonList: Array<any> = [
    // {id: 6, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 7, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 8, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 9, userName: '', role: '', firstName: '', lastName: '', email: ''},
    //     // {id: 10, userName: '', role: '', firstName: '', lastName: '', email: ''},


  ];


  ngOnInit() {
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
