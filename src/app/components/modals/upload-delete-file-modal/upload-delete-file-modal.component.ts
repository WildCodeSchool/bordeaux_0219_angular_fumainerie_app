import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../../shared/services/documents.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-delete-file-modal',
  templateUrl: './upload-delete-file-modal.component.html',
  styleUrls: ['./upload-delete-file-modal.component.scss']
})
export class UploadDeleteFileModalComponent implements OnInit {
  index: number;

  constructor(private documentService: DocumentsService,
              private dialogRef: MatDialogRef<UploadDeleteFileModalComponent>, ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  onDelete() {
    this.documentService.deleteFile(this.index).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
