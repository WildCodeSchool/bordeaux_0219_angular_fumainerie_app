import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  title = false;
  user: User;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.userService.user;
  }
  onUploadForm() {
    this.router.navigate(['/dashboard/documents/uploader']);
  }

}
