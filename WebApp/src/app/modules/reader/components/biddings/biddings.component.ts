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

  download(item) {
    this.documentService.download({id: item.id})
      .subscribe((data) => {
        const url = window.URL.createObjectURL(new Blob([data], {type: 'application/pdf'}));
        const pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
          alert('Please disable your Pop-up blocker and try again.');
        }
      }, (error) => {
        console.log(error);
      });
  }

}