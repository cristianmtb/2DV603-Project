import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import config from "../../../config.json";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  

  public getUsers ()
  {
    return this.http.get<Response>(`${config.serverUrl}/api/users/get/`);
  }

  public getSupervisors()
  {
    return this.http.get<Response>(`${config.serverUrl}/api/users/get/?roleId=3`);
  }

  public addUser(newUser:User)
  {
    let user: Send = new Send;
    user.user = new UserRes();
    user.user.email = "newUser.email";
    user.user.firstName = "newUser.name";
    user.user.password = "asd";
    user.user.roleId = 1;
    user.user.username = "newUser.username";
    this.http.post<Send>(`${config.serverUrl}/api/user/add/`, user).subscribe((data)=>{
      console.log(data);
    })
  }

  public toUser(res: Response)
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
  private generateRoleId()
  {
    return 1;
  }
}

class Send
{
  user:UserRes;
}

class Response
{
  users:Array<UserRes>;
}
class UserRes
{
  username: string;
  password: string;
  roleId: number;
  id;
  email;
  deleted;
  singedIn;
  firstName;
}
