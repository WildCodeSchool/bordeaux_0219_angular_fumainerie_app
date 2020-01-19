import { Router } from '@angular/router';
import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { DocumentsService } from './../../shared/services/documents.service';
import { Component, OnInit } from '@angular/core';
import { Document } from '../../shared/models/document';

@Component({
  selector: 'app-ressources-documents',
  templateUrl: './ressources-documents.component.html',
  styleUrls: ['./ressources-documents.component.scss']
})

export class RessourcesDocumentsComponent implements OnInit {
  dataSearch: Document[];
  searchWord: string;
  user: User;
  constructor(private serviceDocument: DocumentsService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    if (this.userService.user !== undefined) {
      this.user = this.userService.user;
    }
    this.serviceDocument.getAllDocuments().subscribe((data: Document[]) => {
      this.dataSearch = data;
    });
  }

  search(word: string) {
    this.serviceDocument.getDocumentsByWord(word).subscribe( (data: Document[]) => {
      this.dataSearch = data;
    });
  }
  onUploadForm() {
    this.router.navigate(['/dashboard/documents/uploader']);
  }

}

