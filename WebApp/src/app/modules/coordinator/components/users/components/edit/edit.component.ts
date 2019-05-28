import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../../../models/user";
import {SupervisorService} from "../../../../../../services/user/supervisor.service";

@Component({
  selector: 'app-coordinator-users-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;


  @Input() show;
  @Output() userAdded = new EventEmitter<User>();
  @ViewChild("userEditModal") modal;

  constructor(private SupervisorService: SupervisorService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
    });

  }

  ngOnInit() {
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
