import {Component, OnInit} from '@angular/core';
import {DocumentService} from 'src/app/services/documentService/document.service';
import {Router} from "@angular/router";

class Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  locked: boolean;
  step: number;

  constructor(step, title, description, icon, url, locked = true) {
    this.title = title;
    this.step = step;
    this.description = description;
    this.icon = icon;
    this.url = url;
    this.locked = locked;
  }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  items: Item[] = [];

  constructor(private doc: DocumentService, private router: Router) {
    this.items.push(new Item(
      1,'Description', 'Project description', 'fas fa-file-alt', 'submit', false));
    this.items.push(new Item(
      2,'Supervisor', 'Pick a supervisor', 'fas fa-user-tie', 'supervisor', false));
    this.items.push(new Item(
      3,'Project Plan', 'Submit your project plan', 'fas fa-file', 'plan'));
    this.items.push(new Item(
      4,'Report', 'Submit your report', 'fas fa-file-alt', 'report'));
    this.items.push(new Item(
      5,'Final Report', 'Submit your final report', 'fas fa-file-pdf', 'final'));
  }

  ngOnInit(): void {
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate(['/student/' + item.url]);
  }

  load() {

  }

}