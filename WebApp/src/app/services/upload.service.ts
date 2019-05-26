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

    const path = '/api/files';

    return this.http.post(path, formData, {});
  }


}
