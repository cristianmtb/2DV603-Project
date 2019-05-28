import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../../../services/upload.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../../../services/documentService/document.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-submit-document',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


  constructor(private formBuilder: FormBuilder,
              private uploadService: UploadService,
              private documentService: DocumentService,
              private authService: AuthService) {
    this.form = this.formBuilder.group({
      file: ['', [Validators.required]],
      type: [2, [Validators.required]],
      title: ['dfsdfsdf', [Validators.required]],
      authorId: [authService.getCurrentUserId()],
    });
  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  upload() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.working = true;


    this.documentService.uploadDocument(this.form.value)
      .subscribe((next) => {
        console.log(next);
      }, (error) => {

      })
  }

}
