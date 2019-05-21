import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private uservice:UserService) { }

  ngOnInit() {
    this.uservice.getUsers().subscribe((data)=>{
      while(data == null)
      {
        ;
      }
      console.log(data);
      //this.personList = this.uservice.toUser(data);
    });
  }

}
