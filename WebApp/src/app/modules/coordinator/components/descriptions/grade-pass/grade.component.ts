import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../../../../services/document/document.service";
import {Document} from "../../../../../models/document";

@Component({
  selector: 'app-coordinator-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;

  @Output() documentGraded = new EventEmitter<Document>();
  @ViewChild("userEditModal") modal;

  constructor(private documentService: DocumentService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      grade_pass: ['', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  show(document: Document) {
    this.form.controls.grade_pass.setValue(document.gradePass);
    this.modal.show();
  }

  save() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.error = null;
    this.working = true;

    this.documentGraded.emit(new Document());
    this.modal.hide();

    /*
    this.userService.add(this.form.value)
      .subscribe((next) => {
          this.userAdded.emit(next.user);
          this.basicModal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      )
  */

  }

}
