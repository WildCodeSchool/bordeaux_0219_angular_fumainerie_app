import { NewsModalComponent } from './../../modals/news-modal/news-modal.component';
import { NewsService } from './../../../shared/services/news.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  constructor(private router: Router,
              private newsService: NewsService,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              public dialog: MatDialog) { }

  newsForm: FormGroup;

  ngOnInit() {
    this.newsForm = this.formbuilder.group({
      title:  ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
    });
  }
  resetForm() {
    this.newsForm.reset();
  }
  onClose() {
    this.router.navigate(['/dashboard/actualites']);
  }
  onSubmitNewsForm() {
    this.newsService.createNews(this.newsForm.value).subscribe();
    const dialogRef = this.dialog.open(NewsModalComponent , {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/dashboard/actualites']);
       }
      });
    }
  }
