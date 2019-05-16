/*
 * Author: Cristian Babes
 * Description: This service is responsible to all the authentication needs.
 * It has functions for login, logout, checking the user role and retrieving user information
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUser: User = null;
  constructor(private http: HttpClient) { }

  isLoggedIn()
  {
    if (this.currentUser !== null) return true;
    else return false;
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
    // if(username === 'coord' && password === 'coord') 
    // {
    //   this.currentUser = new User;
    //   this.currentUser.password = 'coord';
    //   this.currentUser.username = 'coord';
    //   this.currentUser.coordinator = true;
    //   this.currentUser.supervisor = true;
    //   return true;
    // }
    this.getUser(username, password).subscribe((data: User) => this.currentUser = {
      username: data['username'],
      password: data['password'],
      roleID: data['roleId'],
      coordinator: true,
      supervisor: false,
      student: false,
      reader: false,
      opponent: false
    });
    console.log(this.getUser(username, password));
   // console.log(this.currentUser.username);
    if(this.currentUser.username === 'coord' && this.currentUser.password === 'coord') return true;
    return false;
  }

  private getUser (username: string, password: string) 
  {
    return this.http.get<User>(`http://192.168.1.21:8080/api/users/get/?username=${username}&password=${password}`);
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
