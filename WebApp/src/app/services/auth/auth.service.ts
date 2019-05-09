import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string)
  {
    if(username === 'admin' && password === 'admin') return true;
    return false;
     //return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
  }
}
