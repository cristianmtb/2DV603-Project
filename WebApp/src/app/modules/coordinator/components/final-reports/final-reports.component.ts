import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";
import {Document} from "../../../../models/document";

@Component({
  selector: 'app-final-reports',
  templateUrl: './final-reports.component.html',
  styleUrls: ['./final-reports.component.scss']
})
export class FinalReportsComponent implements OnInit {

  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  private document = new Document();


  constructor(
    private documentsService: DocumentsService
  ) {
  }


  ngOnInit() {
    this.get();
  }

  add(document) {
    this.documents.push(document);
  }

  get() {
    this.documentsService.get({type: 4})
      .subscribe(
        (data) => {
          this.documents = data;
          console.log(data);

        }, (error) => {

        });
  }

}
