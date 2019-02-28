import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {

      if(it.FirstName ||it.LastName ||  it.Phone ){
        return it.FirstName.toLocaleLowerCase().includes(searchText) ||
        it.LastName.toLocaleLowerCase().includes(searchText) || 
        it.Phone.toLocaleLowerCase().includes(searchText);

      }
      if(it.PatientName || it.PatientPhone ){
        return it.PatientName.toLocaleLowerCase().includes(searchText) ||
        it.PatientPhone.toLocaleLowerCase().includes(searchText) 
      }

    });
  }
}