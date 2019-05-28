import {Injectable} from '@angular/core';
import {Deadline} from 'src/app/models/deadline';

@Injectable({
  providedIn: 'root'
})
export class DeadlineServiceService {
  private deadlines: Deadline[];

  constructor() {
    //this.deadlines[0] = new Deadline();
  }

  public getDeadline(index: number): Deadline {
    return this.deadlines[index];
  }

  public getDeadlines(): Deadline[] {
    return this.deadlines
  }

  public updateDeadline(index: number) {

  }

}
