import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import { HttpClient } from '@angular/common/http';
import config from "../../../config.json";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) { }

  public getDoc()
  {
    this.http.get<any>(`${config.serverUrl}/api/document/get/`).subscribe((data)=>{
      console.log(data);
    });
  }
}
