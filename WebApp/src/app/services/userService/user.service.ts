import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import config from "../../../config.json";
import {createFormData} from "../formData";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  public suggest(data) {
    return this.http.post(`${config.serverUrl}/api/supervisor_confirmation/add/`, createFormData(data));
  }

}
