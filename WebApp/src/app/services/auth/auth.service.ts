/*
 * Author: Cristian Babes
 * Description: This service is responsible to all the authentication needs.
 * It has functions for login, logout, checking the user role and retrieving user information
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

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
    if(username === 'coord' && password === 'coord') 
    {
      this.currentUser = new User;
      this.currentUser.password = 'coord';
      this.currentUser.username = 'coord';
      this.currentUser.coordinator = true;
      this.currentUser.supervisor = true;
      return true;
    }
    if(username === 'admin' && password === 'admin') 
    {
      this.currentUser = new User;
      this.currentUser.password = 'admin';
      this.currentUser.username = 'admin';
      this.currentUser.reader = true;
      this.currentUser.student = true;
      this.currentUser.opponent = true;
      return true;
    }
    return false;
     //return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
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
