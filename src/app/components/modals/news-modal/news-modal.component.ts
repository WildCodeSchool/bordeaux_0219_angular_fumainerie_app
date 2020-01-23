import { MatDialogRef } from '@angular/material';
import { Component} from '@angular/core';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.scss']
})

export class NewsModalComponent {

  constructor(private dialogRef: MatDialogRef<NewsModalComponent>) {}

  onClose() {
    this.dialogRef.close(true);
  }
}
