import {Component, OnInit, ViewChild} from '@angular/core';
import {Document} from "../../../../models/document";
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";
import {DocumentService} from "../../../../services/document/document.service";
import {BiddingService} from "../../../../services/bidding/bidding.service";
import {Bid} from "../../../../models/biddings";

@Component({
  selector: 'app-biddings',
  templateUrl: './biddings.component.html',
  styleUrls: ['./biddings.component.scss']
})
export class BiddingsComponent implements OnInit {

  documents: Document[] = [];
  bids: Bid[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("documentGrade") documentGrade;


  constructor(
    private documentsService: DocumentsService,
    private bidingService : BiddingService

  ) {
  }


  ngOnInit() {
    this.get();
  }

  add(bid) {
    this.bids.push(bid);
  }

  get() {
    this.bidingService.get()
      .subscribe(
        (data) => {
          this.bids = data;
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
// add(bids) {
//   this.bids.push(bids);
// }
//
// get() {
//   this.biddingService.get()
//     .subscribe(
//       (data) => {
//         this.bids = data
//       }, (error) => {
//
//       });
// }


// add(document) {
//   this.documents.push(document);
// }
//
// get() {
//   this.documentsService.get({type: 3})
//     .subscribe(
//       (data) => {
//         this.documents = data;
//         console.log(data);
//
//       }, (error) => {
//
//       });
// }
