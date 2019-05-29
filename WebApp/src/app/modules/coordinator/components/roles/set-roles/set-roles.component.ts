import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../../../../models/document";
import {DocumentService} from "../../../../../services/document/document.service";
import {User} from "../../../../../models/user";

@Component({
  selector: 'app-set-roles',
  templateUrl: './set-roles.component.html',
  styleUrls: ['./set-roles.component.scss']
})
export class SetRolesComponent implements OnInit {

  form: FormGroup;
  error = null;
  working = false;

  @Output() roleSet = new EventEmitter<User>();
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

    this.roleSet.emit(new User());
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
