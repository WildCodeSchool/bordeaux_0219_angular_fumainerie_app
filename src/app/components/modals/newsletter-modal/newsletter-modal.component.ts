import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter-modal',
  templateUrl: './newsletter-modal.component.html',
  styleUrls: ['./newsletter-modal.component.scss']
})

export class NewsletterModalComponent {
  constructor(private router: Router,
              private dialogRef: MatDialogRef<NewsletterModalComponent>) {}

  onClose() {
    this.router.navigate(['/']);
    this.dialogRef.close();
  }
}
