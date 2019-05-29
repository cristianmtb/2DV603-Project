import {Component, OnInit, ViewChild} from '@angular/core';
import {Document} from "../../../../models/document";
import {MdbTableDirective} from "angular-bootstrap-md";
import {FormGroup} from "@angular/forms";
import {DocumentsService} from "../../../../services/document/documents.service";
import {DocumentService} from "../../../../services/document/document.service";

@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.scss']
})
export class AssesmentsComponent implements OnInit {

  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("documentGrade") documentGrade;
  form: FormGroup;
  error = null;
  working = false;

  elements: any = [
    {name: 'Status', value: 'Not submitted'},
    {name: 'Deadline', value: '-'},
    {name: 'File', value: '-'},
    {name: 'Evaluation', value: '-'},
  ];

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
    this.documentsService.get({type: 4})
      .subscribe(
        (data) => {
          this.documents = data;
          console.log(data);

        }, (error) => {

        });
  }

  grade(document) {

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

  documentSubmitted(document) {
    this.elements[0].value = 'Submitted for Evaluation';
    this.elements[2].value = document.title;
  }


}
