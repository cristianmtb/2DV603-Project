import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";
import {Document} from "../../../../models/document";

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {

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
    this.documentsService.get({type: 1})
      .subscribe(
        (data) => {
          this.documents = data;
          console.log(data);

        }, (error) => {

        });
  }


}
