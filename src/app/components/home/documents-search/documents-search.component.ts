import { DocumentsService } from '../../../shared/services/documents.service';
import { UploadDeleteFileModalComponent } from '../../modals/upload-delete-file-modal/upload-delete-file-modal.component';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../../shared/models/document';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-documents-search',
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.scss']
})

export class DocumentsSearchComponent implements OnInit {
  // Input paralax view: true by default
  @Input() isParallaxEnable = true;
  @Input() checked: boolean;
  dataSearch: Document[];
  searchWord: string;
  user?: User;
  name: string;
  link: string;
  connected: boolean;
  document: Document[];
  status = new FormControl();

constructor(private serviceDocument: DocumentsService,
            private userService: UserService,
            private dialog: MatDialog,
            private router: Router) { }

ngOnInit() {
  if (this.userService.user !== undefined) {
    this.connected = true;
    this.user = this.userService.user;
    this.serviceDocument.getAllDocuments().subscribe((data: Document[]) => {
    this.dataSearch = data; });
    } else {
      this.serviceDocument.getValidedDocuments().subscribe((data: Document[]) => {
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
  onChange(toggle, index: number) {
    this.dataSearch[index].status = toggle.checked;
    this.serviceDocument.modifyDocument(this.dataSearch[index]).subscribe();
  }
}
