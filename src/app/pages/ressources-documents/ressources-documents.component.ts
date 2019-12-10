import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressources-documents',
  templateUrl: './ressources-documents.component.html',
  styleUrls: ['./ressources-documents.component.scss']
})
export class RessourcesDocumentsComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  dataArray = ['Julie Enoux', 'Cyril Enoux', 'Olivier', 'Adrien', 'Erique', 'Eric', 'Madeleine', 'Julie Roberts', 'Martine Olivier', 'Mars Eric', 'Charlie Enoux', 'Luce Enoux', 'Karine Simon', 'Eric Souffrin', 'Valentin Souffrin'];
  dataSearch = [];
  recherche = '';
  erreur = '';

  constructor() { }

  ngOnInit() {
  }
  search() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.dataArray.length; i++) {
      if (this.dataArray[i].toLowerCase().includes(this.recherche.toLowerCase())) {
        this.dataSearch.push(this.dataArray[i]);
      } else if (this.dataSearch.length < 1) {
        return this.erreur = 'Il n\'y a pas de resultat correspondant';
      }
    }
    return this.dataSearch;
  }
}
