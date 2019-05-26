import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../../../services/upload.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-submit-document',
  templateUrl: './submit-document.component.html',
  styleUrls: ['./submit-document.component.scss']
})
export class SubmitDocumentComponent implements OnInit {

  form: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private uploadService: UploadService) {
    this.form = this.formBuilder.group({
      file: ['']
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


    console.log(this.form);


    this.uploadService.upload(this.form.controls.file.value)
  }

}
