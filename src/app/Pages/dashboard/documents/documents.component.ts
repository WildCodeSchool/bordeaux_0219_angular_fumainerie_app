import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';

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
