import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {createFormData, createParameters} from "../formData";
import {environment} from "../../../environments/environment";

@Injectable()
export class DocumentService {
  constructor(private http: HttpClient) {
  }

  public upload(data) {
    return this.http.post<any>(`${environment.serverUrl}/api/document/add`, createFormData(data));
  }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/document/get`, {
      params: createParameters(args)
    });
  }

  public download(args = null) {
    this.http.get(`${environment.serverUrl}/api/document/download`, {
      responseType: "blob",
      params: createParameters(args)
    })
      /*
      * .subscribe((data) => {
        var blob = new Blob([data], {type: 'application/pdf'});
        var url = window.URL.createObjectURL(blob);
        var pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
          alert('Please disable your Pop-up blocker and try again.');
        }
      })
      *
      * */
  }
}
