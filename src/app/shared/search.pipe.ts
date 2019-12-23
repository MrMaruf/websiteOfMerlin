import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchParam: string, propertyToCompare: string): any {
    if (searchParam.length === 0) {
      return value;
    }
    const newValue: any[] = [];
    for (const item of value) {
      if (item[propertyToCompare].toLowerCase().includes(searchParam.toLowerCase())) {
        newValue.push(item);
      }
    }
    return newValue;
  }
}
