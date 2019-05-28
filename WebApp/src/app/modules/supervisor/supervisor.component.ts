import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";


class Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  locked: boolean;
  step: number;

  constructor(title, description, icon, url, locked = true) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.url = url;
    this.locked = locked;
  }
}


@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  items: Item[] = [];

  constructor(private auth: AuthService, private router: Router) {

    this.items.push(new Item(
      'Project plan Feedback', 'project plan feedback', 'fas fa-file-alt', '', false));
    this.items.push(new Item(
      'Confirm Supervision', 'confirm students', "fas fa-check-circle", ''));
    this.items.push(new Item(
      'Assessment', 'supervisor assessment', 'fas fa-percent', ''));

  }

  ngOnInit() {
    if (!this.auth.isSupervisor()) {
      this.router.navigate(["login"]);
    }
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate(['/supervisor/' + item.url]);
  }

  load() {

  }


}
