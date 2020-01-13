import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-news-delete-modal',
  templateUrl: './news-delete-modal.component.html',
  styleUrls: ['./news-delete-modal.component.scss']
})
export class NewsDeleteModalComponent implements OnInit {
  index: number;
  constructor( private dialogRef: MatDialogRef<NewsDeleteModalComponent>,
               private newsService: NewsService) { }

    ngOnInit() {
    }
    onClose() {
      this.dialogRef.close();
    }
    onDelete() {
      this.newsService.deleteNews(this.index).subscribe(() => {
        this.dialogRef.close(true);
        });
    }
  }
