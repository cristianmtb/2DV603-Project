import { Injectable } from '@angular/core';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import { HttpClient } from '@angular/common/http';
import {Document} from '../../models/document'
import config from "../../../config.json";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) { }

  public getDocuments(authorId)
  {
    return this.http.get<Response>(`${config.serverUrl}/api/document/get/?authorId=${authorId}`);
  }
  public toDoc(res: Response):Document
  {
    return res.document;
  }
  public addDocument()
  {
    
  }
}

class Response
{
  document:Document;
}
