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
    {name: 'Status', value: 'Not submitted'},
    {name: 'Deadline', value: '-'},
    {name: 'File', value: '-'},
  ];

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

  documentSubmitted(document) {
    this.elements[0].value = 'Submitted for approval';
    this.elements[2].value = document.title;
  }
}
