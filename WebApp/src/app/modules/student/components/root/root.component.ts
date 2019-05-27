
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DocumentService } from 'src/app/services/documentService/document.service';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  constructor(private doc: DocumentService)
  {

  }
  ngOnInit(): void {
    //this.doc.uploadDocument(142,"muie", "projectPlan", "adsfdsaasgddsf");
    this.doc.downloadDoc(1);

  }

}
