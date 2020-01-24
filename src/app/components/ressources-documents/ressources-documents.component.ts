import { UploadDeleteFileModalComponent } from './../modals/upload-delete-file-modal/upload-delete-file-modal.component';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { DocumentsService } from '../../shared/services/documents.service';
import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../shared/models/document';
import { MatDialog } from '@angular/material';

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
  user?: User;
  name: string;
  link: string;
constructor(private serviceDocument: DocumentsService,
            private userService: UserService,
            private dialog: MatDialog) {

             }

ngOnInit() {
  this.user = this.userService.user;
  if (this.user) {
    this.serviceDocument.getAllDocuments().subscribe((data: Document[]) => {
      this.dataSearch = data;
  });

    }
  }

search(word: string) {
    this.serviceDocument.getDocumentsByWord(word).subscribe( (data: Document[]) => {
      this.dataSearch = data;
    });
  }
onIdFile(id) {
  console.log(id + this.dataSearch[id].link);
  this.name = this.dataSearch[id].link;
  this.link = environment.url + '/uploads/' + this.name;
}
onAskDeleteFile(index: number, i: number) {
  const dialogRef = this.dialog.open(UploadDeleteFileModalComponent, {
    width: '50%' });
  const instance = dialogRef.componentInstance;
  instance.index = index;

  dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.dataSearch.splice(i, 1);
      }
    });

  }
}
