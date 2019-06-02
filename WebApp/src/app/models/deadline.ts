export class Deadline {
  private id: number;
  private deadline: Date;
  private step: number;

  constructor(submission = null) {
    if (submission != null) {
      this.fromDocument(submission);
    }
  }


  private fromDocument(submission) {
    this.id = submission.id;
    this.deadline = submission.deadline;
    this.step = submission.step;

  }

  public getId() {
    return this.id;
  }

  public getDeadline() {
    return this.deadline;
  }

  public getStep() {
    return this.step;
  }


}
