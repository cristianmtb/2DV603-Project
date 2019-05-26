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


  public suggest(data) {
    return this.http.post(`${config.serverUrl}/api/supervisor_confirmation/add/`, createFormData(data));
  }

}
