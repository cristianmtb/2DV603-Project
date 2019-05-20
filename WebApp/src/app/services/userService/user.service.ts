import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: Array<User> = null;
  private response:Response = null;
  private serverUrl:string;
  constructor(private http: HttpClient) { }

  public getUsers ():Array<User> 
  {
    this.http.get<Response>(`http://192.168.1.21:8080/api/users/get/`).subscribe((data)=>{
      while(data == null)
      {
        ;
      }
      return this.toUser(data);
      // console.log(this.userList)
      // return userList
    });
    return null;
  }

  public getSupervisors():Array<User> 
  {
    this.http.get<Response>(`http://192.168.1.21:8080/api/users/get/?roleId=3`).subscribe((data)=>{
      while(data == null)
      {
        ;
      }
      return this.toUser(data);
      // console.log(this.userList)
      // return userList
    });
    return null;
  }


  private toUser(res: Response)
  {
    let user:Array<User> = new Array<User>();
    for(let i = 0; i < res.users.length; i++)
    {
      let auxUser:User = new User;
      auxUser.username = res.users[i].username;
      auxUser.roleID = res.users[i].roleId;
      auxUser.id = res.users[i].id;
      auxUser.name = res.users[i].firstName;
      auxUser.email = res.users[i].email;
      switch(auxUser.roleID)
      {
        case 1:
          auxUser.student = true;
          break;
        case 2:
          auxUser.opponent = true;
          break;
        case 3:
          auxUser.supervisor = true;
          break;
        case 4:
          auxUser.reader = true;
          break;
        case 5:
          auxUser.coordinator = true;
          break;
        case 6:
          auxUser.student = true;
          auxUser.opponent = true;
          break;
        default:
          ;
      }
      user.push(auxUser);
    }
    
    return user;
  }
}
class Response{
  users:Array<UserRes>;

  
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