/*
 * Author: Cristian Babes
 * Description: This service is responsible to all the authentication needs.
 * It has functions for login, logout, checking the user role and retrieving user information
*/

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/user';
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {createParameters} from "../formData";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUser: User = null;

  constructor(private http: HttpClient) {
  }

  isLoggedIn() {
    return this.currentUser != null;
  }

  getUserName() {
    if (this.isLoggedIn()) {
      return this.currentUser.username
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUserId() {
    return this.currentUser.id;
  }

  logout() {
    this.currentUser = null;
  }

  login(args = null): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.serverUrl + '/api/user/get', {
        params: createParameters(args)
      })
        .pipe(map(
          actions => {
            return new User(actions.user);
          }))
        .subscribe(
          (next) => {
            this.currentUser = next;
            resolve(next);
          },
          (error) => {
            reject(error);
          }
        )
    });
  }

  isCoordinator() {
    return this.isLoggedIn() && this.currentUser.isCoordinator();
  }

  isStudent() {
    return this.isLoggedIn() && this.currentUser.isStudent();
  }

  isSupervisor() {
    return this.isLoggedIn() && this.currentUser.isSupervisor();
  }

  isReader() {
    return this.isLoggedIn() && this.currentUser.isReader();
  }

  isOpponent() {
    return this.isLoggedIn() && this.currentUser.isOpponent();
  }
}

