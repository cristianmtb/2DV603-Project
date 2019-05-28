export class Document {
  authorId: number;
  title: string;
  type: number;
  opponentId: number;
  supervisorId: number;
  readerFeedbackId: number;
  opponentFeedbackId: number;
  gradeNum: number;
  gradePass: number;
  id: number;

  constructor(document = null) {
    if (document != null) {
      this.fromDocument(document);
    }
  }

  private fromDocument(document) {
    this.authorId = document.authorId;
    this.title = document.title;
    this.type = document.type;
    this.opponentId = document.opponentId;
    this.supervisorId = document.supervisorId;
    this.readerFeedbackId = document.readerFeedbackId;
    this.opponentFeedbackId = document.opponentFeedbackId;
    this.gradeNum = document.gradeNum;
    this.gradePass = document.gradePass;
    this.id = document.id;
  }

  isDescription() {
    return this.type == 1;
  }

  isFinal() {
    return this.type == 4;
  }

  isplan() {
    return this.type == 2;
  }

  isReport() {
    return this.type == 3;
  }

}
