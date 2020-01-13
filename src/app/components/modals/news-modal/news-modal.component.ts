import { NewsService } from './../../../shared/services/news.service';
import { MatDialogRef } from '@angular/material';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.scss']
})
export class NewsModalComponent {

  constructor(private router: Router,
              private newsService: NewsService,
              private dialogRef: MatDialogRef<NewsModalComponent>) {}
  onClose() {
    this.router.navigate(['dashboard/communication/avis']);
    this.dialogRef.close();
  }
}
