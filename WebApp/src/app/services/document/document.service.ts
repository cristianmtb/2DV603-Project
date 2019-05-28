import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from '../../models/document'
import config from "../../../config.json";
import {createFormData} from "../formData";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) {
  }

  public getDocuments(authorId) {
    return this.http.get<Response>(`${config.serverUrl}/api/document/get/?authorId=${authorId}`);
  }

  public toDoc(res: Response): Document {
    return res.document;
  }

  public uploadDocument(data) {
    return this.http.post<any>(`${config.serverUrl}/api/document/add`, createFormData(data));
  }

  public downloadDoc(docID) {
    this.http.get(`${config.serverUrl}/api/document/download/?id=${docID}`, {responseType: "blob"}).subscribe((data) => {
      //console.log(data);
      var blob = new Blob([data], {type: 'application/pdf'});
      var url = window.URL.createObjectURL(blob);
      var pwa = window.open(url);
      if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert('Please disable your Pop-up blocker and try again.');
      }
    })
  }
}

class Response {
  document: Document;
}
