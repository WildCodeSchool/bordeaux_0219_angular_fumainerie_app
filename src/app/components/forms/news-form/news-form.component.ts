import { NewsModalComponent } from '../../modals/news-modal/news-modal.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewsService } from '../../../shared/services/news.service';
// import { NewsModalFormComponent} from '../../modals/';
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  constructor(private newsService: NewsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

    newsForm: FormGroup;


    ngOnInit() {
      this.newsForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        link: ['', Validators.required],
      });
    }
    resetForm() {
      this.newsForm.reset();
    }
    onClose() {
      this.router.navigate(['dasboard/actualites']);
    }
    onSubmitNewsForm() {
      console.log('modale ouverte?');
      console.log(this.newsForm.value);

      this.newsService.createNews(this.newsForm.value).subscribe();
      const dialogRef = this.dialog.open(NewsModalComponent, {
        width: '250px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed');
        if (result) {
          this.router.navigate(['dasboard/actualites']);
        }
      });
    }
  }
