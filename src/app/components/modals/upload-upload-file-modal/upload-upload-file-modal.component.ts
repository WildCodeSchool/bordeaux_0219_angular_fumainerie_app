import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-upload-file-modal',
  templateUrl: './upload-upload-file-modal.component.html',
  styleUrls: ['./upload-upload-file-modal.component.scss']
})
export class UploadUploadFileModalComponent implements OnInit {

  constructor(private router: Router,
              private dialogRef: MatDialogRef<UploadUploadFileModalComponent>) { }

  ngOnInit() {
  }
  onClose() {
    this.router.navigate(['dashboard/documents']);
    this.dialogRef.close();
  }
}
