import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UploadService {


  constructor(private http: HttpClient) {


  }

  upload(file) {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);

    const path = 'http://172.19.152.107:8080/api/document/add';

    return this.http.post(path, formData, {});
  }


}
