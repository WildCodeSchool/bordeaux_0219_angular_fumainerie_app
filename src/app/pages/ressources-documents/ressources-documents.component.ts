import { DocumentsService } from './../../shared/services/documents.service';
import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../shared/models/document';
import { log } from 'util';

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
  constructor(private serviceDocument: DocumentsService) { }

  ngOnInit() {
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

