// import { MatDialog } from '@angular/material';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { NewsService } from './../../../../shared/services/news.service';

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Route } from '@angular/compiler/src/core';

// @Component({
//   selector: 'app-actualites-form',
//   templateUrl: './actualites-form.component.html',
//   styleUrls: ['./actualites-form.component.scss']
// })
// export class ActualitesFormComponent implements OnInit {

//   constructor(private actualiteService: NewsService,
//               private router: Router,
//               private route: Route,
//               private formBuilder: FormBuilder,
//               private dialog: MatDialog) { }

//     actualiteForm: FormGroup;
//     ngOnInit() {
//       this.actualiteForm = this.formBuilder.group({
//         title: ['', Validators.required],
//         description: ['', Validators.required],
//         link: ['', Validators.required],
//       });
//     }
//     resetForm() {
//       this.actualiteForm.reset();
//     }
//     onClose() {
//     }
//     onSubmitActualiteForm() {
//       console.log('modale ouverte?');
//       console.log(this.actualiteForm.value);
//       this.actualiteService.createNews(this.actualiteForm.value).subscribe();
//       const dialogRef = this.dialog.open(ActualitesFormComponent, {
//         width: '250px',
//       });
//       dialogRef.afterClosed().subscribe(result => {
//         console.log('The dialog is closed');
//       });
//     }
//   }
