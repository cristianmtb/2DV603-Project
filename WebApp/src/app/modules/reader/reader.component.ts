import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
class Item {
  title: string;
  description: string;
  icon: string;
  url: string;


  constructor(title, description, icon, url, locked = true) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.url = url;

  }
}
@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  items: Item[] = [];
  constructor(private auth: AuthService, private router: Router) {

    this.items.push(new Item(
      'Bidding', 'Bid of a report', 'fas fa-file-alt', 'bid'));
    this.items.push(new Item(
      'Feedback', 'confirm confirms', "fas fa-check-circle", 'feedback'));
    this.items.push(new Item(
      'Final Evaluation', 'Final Evaluation', 'fas fa-chart-line', 'final'));

  }
  ngOnInit() {
    if (!this.auth.isReader()) {
      this.router.navigate(["login"]);
    }
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate(['/reader/' + item.url]);
  }

  load() {

  }


}
