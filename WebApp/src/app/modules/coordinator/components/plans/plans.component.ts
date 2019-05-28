import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  private document = new Document();

  constructor(
    private documentsService: DocumentsService
  ) {
  }

  documents: Array<Document>;


  ngOnInit() {
    this.get();
  }

  add(document) {
    this.documents.push(document);
  }

  get() {
    this.documentsService.get({type: 2})
      .subscribe(
        (data) => {
          this.documents = data
        }, (error) => {

        });
  }

}
