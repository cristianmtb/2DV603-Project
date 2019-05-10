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
    if(username === 'admin' && password === 'admin') 
    {
      this.currentUser = new User;
      this.currentUser.password = 'admin';
      this.currentUser.username = 'admin';
      this.currentUser.role_id = 1;
      return true;
    }
    return false;
     //return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
  }
}
