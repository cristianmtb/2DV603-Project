import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import config from "../../../config.json";
import {createFormData, createParameters} from "../formData";
import { map } from 'rxjs/operators';
import { Confirmation } from 'src/app/models/confirmation.js';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  constructor(private http: HttpClient) {
  }
  public suggest(data) {
    return this.http.post(`${config.serverUrl}/api/supervisor-confirmation/add`, createFormData(data));
  }
  public getSuggestions(args = null)
  {
    return this.http.get<any>(`${config.serverUrl}/api/supervisor-confirmation/get/`,{
      params: createParameters(args)
    }).pipe(map(actions=>{
        console.log(actions);
        return actions.confirmation.map(item=>
        {
          return new Confirmation(item);
        });
      }
    ));
  }
}
