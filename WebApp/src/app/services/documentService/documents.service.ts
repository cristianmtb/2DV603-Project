import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from 'src/app/models/document';
import config from "../../../config.json";
import {createFormData, createParameters} from "../formData";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  constructor(private http: HttpClient) {
  }

  public get(args = null) {
    return this.http.get<any>(`${config.serverUrl}/api/documents/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          console.log(actions);
          return actions.documents.map(item => {
            return new Document(item);
          });
        }
      ));
  }



}
