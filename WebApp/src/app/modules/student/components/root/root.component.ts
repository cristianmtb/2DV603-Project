import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {DocumentService} from 'src/app/services/documentService/document.service';
import {Router} from "@angular/router";

class Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  locked: boolean;

  constructor(title, description, icon, url, locked = true) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.url = url;
    this.locked = locked;
  }
}

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  items: Item[] = [];

  constructor(private doc: DocumentService, private router: Router) {
    this.items.push(new Item('Description', 'Project description', 'fas fa-file-alt', 'submit', false));
    this.items.push(new Item('Supervisor', 'Pick a supervisor', 'fas fa-user-tie', ''));
    this.items.push(new Item('Project Plan', 'Project plan', '', 'plan'));
    this.items.push(new Item('Report', 'Project description', '', 'report'));
    this.items.push(new Item('Final Report', 'Final report', '', 'finalreport'));
  }

  ngOnInit(): void {
    //this.doc.uploadDocument(142,"muie", "projectPlan", "adsfdsaasgddsf");
    // this.doc.downloadDoc(1);

  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    console.log(item)
    this.router.navigate([ item.url]);

  }

}
