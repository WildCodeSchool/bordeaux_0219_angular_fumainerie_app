import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { NewsService } from '../../../shared/services/news.service';



@Component({
  selector: 'app-news-delete-modal',
  templateUrl: './news-delete-modal.component.html',
  styleUrls: ['./news-delete-modal.component.scss']
})
export class NewsDeleteModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<NewsDeleteModalComponent>,
              private newsService: NewsService) { }
  index: number;
  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
  onDelete() {
    this.newsService.deleteNews(this.index).subscribe();
    this.dialogRef.close(true);
  }
}
