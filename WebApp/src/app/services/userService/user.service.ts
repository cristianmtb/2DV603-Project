import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: Array<User> = null;
  private response:Response = null;

  constructor(private http: HttpClient) { }

  public getUsers () 
  {
    this.http.get<Response>(`http://192.168.1.21:8080/api/users/get/`).subscribe((data)=>{
      while(data == null)
      {
        ;
      }
      console.log(data);
      this.response = data;
      this.userList = this.toUser(this.response);
      console.log(this.userList)
    });
  }
  private toUser(res: Response)
  {
    let user:Array<User> = new Array<User>();
    for(let i = 0; i < res.user.length; i++)
    {
      user[i].username = res.user[i].username;
      user[i].roleID = res.user[i].roleId;
      user[i].id = res.user[i].id;
      user[i].name = res.user[i].firstName;
      user[i].email = res.user[i].email;
      switch(user[i].roleID)
      {
        case 1:
          user[i].student = true;
          break;
        case 2:
          user[i].opponent = true;
          break;
        case 3:
          user[i].supervisor = true;
          break;
        case 4:
          user[i].reader = true;
          break;
        case 5:
          user[i].coordinator = true;
          break;
        case 6:
          user[i].student = true;
          user[i].opponent = true;
          break;
        default:
          ;
      }
    }
    
    return user;
  }
}
class Response{
  user:Array<UserRes>;

  
}
class UserRes{
  username: string;
  password: string;
  roleId: number;
  id;
  email;
  deleted;
  singedIn;
  firstName;
}