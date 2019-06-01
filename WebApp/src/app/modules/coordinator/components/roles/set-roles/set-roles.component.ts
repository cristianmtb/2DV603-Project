import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../../../../models/document";
import {DocumentService} from "../../../../../services/document/document.service";
import {User} from "../../../../../models/user";
import {UsersService} from "../../../../../services/user/users.service";

@Component({
  selector: 'app-set-roles',
  templateUrl: './set-roles.component.html',
  styleUrls: ['./set-roles.component.scss']
})
export class SetRolesComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;
  user: User = null;
  @Output() roleSet = new EventEmitter<User>();
  @ViewChild("roleSet") modal;


  constructor(private documentService: DocumentService,
              private formBuilder: FormBuilder,
              private userService: UsersService,
  ) {
    this.form = this.formBuilder.group({
      role: ['', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  show(user: User) {
    this.form.controls.role.setValue(user.roleId);
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
    this.userService.edit(this.user.id, this.form.value)

      .subscribe((next) => {
        console.log(next);
          this.roleSet.emit(next);
          // this.userAdded.emit(next);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      )


  }


}
