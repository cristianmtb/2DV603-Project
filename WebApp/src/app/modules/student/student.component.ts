import {Component, OnInit} from '@angular/core';
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
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  items: Item[] = [];

  constructor(private doc: DocumentService, private router: Router) {
    this.items.push(new Item('Description', 'Project description', 'fas fa-file-alt',
      'submit', false));
    this.items.push(new Item('Supervisor', 'Pick a supervisor', 'fas fa-user-tie', ''));
    this.items.push(new Item('Project Plan', 'Project plan', '', 'plan'));
    this.items.push(new Item('Report', 'Project description', '', 'report'));
    this.items.push(new Item('Final Report', 'Final report', '', 'final'));
  }

  ngOnInit(): void {
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate([item.url]);
  }

  load() {

  }

}
