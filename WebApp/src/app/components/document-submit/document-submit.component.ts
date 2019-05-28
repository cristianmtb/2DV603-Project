import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UploadService} from "../../services/upload.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../services/documentService/document.service";
import {AuthService} from "../../services/auth/auth.service";
import {Document} from "../../models/document";

@Component({
  selector: 'app-document-submit',
  templateUrl: './document-submit.component.html',
  styleUrls: ['./document-submit.component.scss']
})
export class DocumentSubmitComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;


  @Input()
  set type(value) {
    this.form.controls.type.setValue(value);
  }

  @Output() documentSubmitted = new EventEmitter<Document>();
  @ViewChild("submitDocument") modal;

  constructor(private formBuilder: FormBuilder,
              private uploadService: UploadService,
              private documentService: DocumentService,
              private authService: AuthService) {
    this.form = this.formBuilder.group({
      file: ['', [Validators.required]],
      type: [this.type, [Validators.required]],
      title: ['', [Validators.required]],
      authorId: [authService.getCurrentUserId(), [Validators.required]],
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

  submit() {
    console.log(this.form.value);
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
        this.working = false;
        this.documentSubmitted.emit(next.document);
        this.modal.hide();
      }, (error) => {
        this.error = error.message;
        this.working = false;
      });
    return false;
  }
}
