import {Injectable} from '@angular/core';
import {Deadline} from 'src/app/models/deadline';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {createFormData, createParameters} from "../formData";
import {map} from "rxjs/operators";
import {Feedback} from "../../models/feedbacks";

@Injectable({
  providedIn: 'root'
})
export class DeadlineServiceService {


  constructor(private http: HttpClient) {
  }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/submission/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          return actions.deadline.map(item => {
            return new Deadline(item);
          });
        }
      ));
  }
  public add(data) {
    return this.http.post<any>(`${environment.serverUrl}/api/submission/add`, createFormData(data));
  }

  public edit(id, data)
  {
    return this.http.post<any>(`${environment.serverUrl}/api/submission/update/` + id,
      createFormData(data)
    ).pipe(map(actions => {
        return new Deadline(actions.bid);
      }
    ));
  }

}
