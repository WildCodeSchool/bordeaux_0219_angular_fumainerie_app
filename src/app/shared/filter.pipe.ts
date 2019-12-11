import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(recherche: string, ...items: any[]): any[] {

    if (!items) {
      return [];
    }
    if (!recherche) {
      return items;
    }
    recherche = recherche.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(recherche);
    });
  }

}
