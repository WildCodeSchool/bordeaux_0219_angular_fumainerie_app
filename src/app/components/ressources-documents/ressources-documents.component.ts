import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { DocumentsService } from '../../shared/services/documents.service';
import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../shared/models/document';

@Component({
  selector: 'app-ressources-documents',
  templateUrl: './ressources-documents.component.html',
  styleUrls: ['./ressources-documents.component.scss']
})

export class RessourcesDocumentsComponent implements OnInit {
  // Input de l'affichage de la parallax à true par défaut
  @Input() isParallaxEnable = true;

  dataSearch: Document[];
  searchWord: string;
  user: User;
  name: string;
  link = env + this.name;
  constructor(private serviceDocument: DocumentsService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.serviceDocument.getAllDocuments().subscribe((data: Document[]) => {
      this.dataSearch = data;
    });


  }

  search(word: string) {
    this.serviceDocument.getDocumentsByWord(word).subscribe( (data: Document[]) => {
      this.dataSearch = data;
    });
  }
}

