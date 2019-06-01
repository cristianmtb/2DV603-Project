import {Component, OnInit, ViewChild} from '@angular/core';
import {Document} from "../../../../models/document";
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";
import {DocumentService} from "../../../../services/document/document.service";

@Component({
  selector: 'app-biddings',
  templateUrl: './biddings.component.html',
  styleUrls: ['./biddings.component.scss']
})
export class BiddingsComponent implements OnInit {

  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("documentGrade") documentGrade;


  constructor(
    private documentsService: DocumentsService,
    private documentService: DocumentService,
  ) {
  }


  ngOnInit() {
    this.get();
  }

  add(document) {
    this.documents.push(document);
  }

  get() {
    this.documentsService.get({type: 3})
      .subscribe(
        (data) => {
          this.documents = data;
          console.log(data);

        }, (error) => {

        });
  }

  set(document) {

  }

  openGradeComponent(item) {
    this.documentGrade.show(item);
  }

}
