import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit() {

  }

  login() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.error = null;
    this.working = true;

    this.auth.login(this.form.controls.username.value, this.form.controls.password.value)
      .then((next) => {
        this.working = false;
        if (next.isStudent()) {
          this.router.navigate(['student']);
        } else if (next.isCoordinator()) {
          this.router.navigate(['']);
        }
        // ToDo: add other routers

      })
      .catch((error) => {
        this.error = 'user not found';
      });

    return false;
  }

}
