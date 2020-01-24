import { NewsDeleteModalComponent } from '../../../components/modals/news-delete-modal/news-delete-modal.component';
import { NewsService } from '../../../shared/services/news.service';
import { News } from '../../../shared/models/news';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-news-link',
  templateUrl: './news.link.component.html',
  styleUrls: ['./news.link.component.scss']
})
export class NewsLinkComponent implements OnInit {
  @Input() checked: boolean;

  constructor(private newsService: NewsService,
              private userService: UserService,
              private dialog: MatDialog,
              private router: Router) { }
    user: User;
    news: News[];

    button =  true;

    ngOnInit() {
      this.user = this.userService.user;
      this.newsService.getAllNews().subscribe((news) => {
        this.news = news;
      });
    }

    onNewsForm() {
      this.router.navigate(['/dashboard/actualites/nouvelle']);
    }

    onAskDeleteNews(index: number, i: number) {
      const dialogRef = this.dialog.open(NewsDeleteModalComponent, {
        width: '50%'
      });
      const instance = dialogRef.componentInstance;
      instance.index = index;

      dialogRef.afterClosed().subscribe(isDeleted => {
        if (isDeleted) {
          this.news.splice(i, 1);
        }
      });
    }

    onChange(toggle, index: number) {
      this.news[index].status = toggle.checked;
      this.newsService.modifyNews(this.news[index]).subscribe();
    }
  }
