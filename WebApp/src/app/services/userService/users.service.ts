import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/user';
import config from "../../../config.json";
import {createFormData, createParameters} from "../formData";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  public get(args = null) {
    return this.http.get<any>(`${config.serverUrl}/api/users/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          console.log(actions);
          return actions.users.map(item => {
            return new User(item);
          });
        }
      ));
  }

  public add(data) {
    return this.http.post(`${config.serverUrl}/api/user/add/`, createFormData(data));
  }

}
