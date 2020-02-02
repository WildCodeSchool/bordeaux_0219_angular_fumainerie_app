import { GenericModalComponent } from './../../modals/generic-modal/generic-modal.component';
import { document } from './../../modals/generic-modal/modalText';
import { MatDialog } from '@angular/material';
import { User } from './../../../shared/models/user';
import { DocumentsService } from './../../../shared/services/documents.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  selectedFile: File;
  fileName: string;
  formSubmitted = false;
  user: User;

  uploadForm = this.fb.group({
    title: [''],
    description: [''],
    file: ['', Validators.required ],
  });

  constructor(
    private documentsService: DocumentsService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.user = this.userService.user;
  }
// Getter
  get f() {
    return this.uploadForm.controls;
  }
// Selection des fichiers à uploaddata
    onFileSelect(event) {
    this.selectedFile = event.target.files as File;
    this.fileName = event.target.files[0].name;
  }

  // Soumission et Modification du Formulaire
    onFormSubmit() {
      this.formSubmitted = true;
      const fd = new FormData();
      fd.append('title', this.uploadForm.get('title').value);
      fd.append('description', this.uploadForm.get('description').value);
      fd.append('file', this.selectedFile[0]);
      let save$;
      save$ = this.documentsService.create(fd);
      save$.subscribe();
      const dialogRef = this.dialog.open(GenericModalComponent, {
        width: '50%',
        data: document
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
    onReset() {
      this.uploadForm.markAsUntouched();
      this.uploadForm.reset();
    }
    onClose() {
      this.router.navigate(['dashboard/documents']);
    }
}

