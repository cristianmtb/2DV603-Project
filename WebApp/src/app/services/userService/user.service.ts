import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import config from "../../../config.json";
import {createFormData} from "../formData";
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
    return this.http.post<UserRes>(`${config.serverUrl}/api/user/add/`, createFormData(this.toBeSent(newUser)));
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
      auxUser.firstName = res.users[i].firstName;
      auxUser.lastName = res.users[i].lastName;
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
        case 7:
          auxUser.student = true;
          auxUser.reader = true;
          break;
        case 8:
          auxUser.supervisor = true;
          auxUser.reader = true;
          break;
        case 9:
          auxUser.supervisor = true;
          auxUser.opponent = true;
          break;
        case 10:
          auxUser.reader = true;
          auxUser.opponent = true;
          break;
                      
        default:
          ;
      }
      user.push(auxUser);
    }
    
    return user;
  }
  private toBeSent(newUser:User):UserRes
  {
    let user = new UserRes();
    user.username = newUser.username;
    user.password = newUser.password;
    user.firstName = newUser.firstName;
    user.lastName = newUser.lastName;
    user.email = newUser.email;
    user.roleId = this.generateRoleId(newUser)
    return user;
  }
  private generateRoleId(user:User)
  {
    if(user.student == true)
    {
      if(user.reader == true)
      {
        return 7;
      }
      if(user.opponent == true)
      {
        return 6;
      }
      return 1;
    }
    if(user.coordinator == true)
    {
      return 5;
    }
    if(user.supervisor == true)
    {
      if(user.reader == true)
      {
        return 8;
      }
      if(user.opponent == true)
      {
        return 9;
      }
      return 3;
    }
    if(user.opponent == true)
    {
      if(user.reader == true)
      {
        return 10;
      }
      return 2;
    }
    if(user.reader == true)
    {
      return 4;
    }
  }
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
  lastName;
}
