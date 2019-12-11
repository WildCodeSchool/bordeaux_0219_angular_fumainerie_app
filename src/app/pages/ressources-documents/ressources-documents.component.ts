import { DocumentsService } from './../../shared/services/documents.service';
import { Component, OnInit } from '@angular/core';
import { Document } from '../../shared/models/document';
import { log } from 'util';

@Component({
  selector: 'app-ressources-documents',
  templateUrl: './ressources-documents.component.html',
  styleUrls: ['./ressources-documents.component.scss']
})
export class RessourcesDocumentsComponent implements OnInit {
  dataSearch: Document[];
  searchWord: string;
  constructor(private serviceDocument: DocumentsService) { }

  ngOnInit() {}

  search(word: string) {
    this.serviceDocument.getDocumentsByWord(word).subscribe( (data: Document[]) => {
    this.dataSearch = data;
    });
  }
}

