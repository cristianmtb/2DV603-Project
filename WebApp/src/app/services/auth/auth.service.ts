/*
 * Author: Cristian Babes
 * Description: This service is responsible to all the authentication needs.
 * It has functions for login, logout, checking the user role and retrieving user information
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import config from "../../../config.json";
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUser: User = null;
  private response:Response = null;

  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn()
  {
    if (this.currentUser == null) return false;
    else return true;
  }
  getUserName()
  {
    if(this.isLoggedIn())
    {
      return this.currentUser.username
    }
  }

  logout()
  {
    this.currentUser = null;
  }

  login(username: string, password: string)
  {
    this.getUser(username, password).subscribe((data) =>{
      while(data == null)
      {
        ;
      }
      this.response = data;
      if(this.response.user.username == username && this.response.user.password == password)
      {
        this.currentUser = this.toUser(this.response);
        this.router.navigate(['']);
      } 
    });
  }


  private getUser (username: string, password: string) 
  {
    return this.http.get<Response>(`${config.serverUrl}/api/user/get/?username=${username}&password=${password}`);
  }

  public toUser(res: Response):User
  {
    let user:User;
    
    user.username = res.user.username;
    user.password = res.user.password;
    user.roleID = res.user.roleId;
    user.id = res.user.id;
    user.firstName = res.user.firstName;
    user.lastName = res.user.lastName;
    user.email = res.user.email;
    switch(user.roleID)
    {
      case 1:
        user.student = true;
        break;
      case 2:
        user.opponent = true;
        break;
      case 3:
        user.supervisor = true;
        break;
      case 4:
        user.reader = true;
        break;
      case 5:
        user.coordinator = true;
        break;
      case 6:
        user.student = true;
        user.opponent = true;
        break;
      default:
        ;

    }
    return user;
  }

  isCoordinator()
  {
    if(this.isLoggedIn() && this.currentUser.coordinator === true) return true;
    return false;
  }
  isStudent()
  {
    if(this.isLoggedIn() && this.currentUser.student === true) return true;
    return false;
  }
  isSupervisor()
  {
    if(this.isLoggedIn() && this.currentUser.supervisor === true) return true;
    return false;
  }
  isReader()
  {
    if(this.isLoggedIn() && this.currentUser.reader === true) return true;
    return false;
  }
  isOpponent()
  {
    if(this.isLoggedIn() && this.currentUser.opponent === true) return true;
    return false;
  }
}

class Response{
  user:UserRes;

  
}
class UserRes{
  username: string;
  password: string;
  roleId: number;
  id;
  lastName;
  email;
  deleted;
  singedIn;
  firstName;
}

