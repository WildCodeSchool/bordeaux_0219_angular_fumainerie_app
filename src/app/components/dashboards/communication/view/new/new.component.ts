import { News } from '../../../../../shared/models/news';
import { UserService } from '../../../../../shared/services/user.service';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../../shared/models/user';
import { NewsService } from '../../../../../shared/services/news.service';
import { NewsDeleteModalComponent } from '../../../../modals/news-delete-modal/news-delete-modal.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  news: News[];
  @Input() checked: boolean;
  status = new FormControl();
  user: User;

  constructor(private newsService: NewsService,
              private dialog: MatDialog,
              private userService: UserService) { }

    ngOnInit() {
      this.user = this.userService.user1;
      if (this.user.function === 'admin') {
        this.newsService.getAllNews().subscribe((news) => {
          this.news = news;
        });
      } else {
        this.newsService.getValidedNews().subscribe((news) => {
          this.news = news;
        });
      }
    }
    onChange(toggle, index: number) {
      console.log(toggle.checked);
      this.news[index].status = toggle.checked;
      this.newsService.modifyNews(this.news[index]).subscribe();
    }
    onAskDeleteNews(index: number) {
      this.newsService.index = index;
      const dialogRef = this.dialog.open(NewsDeleteModalComponent, {
        width: '50%'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
