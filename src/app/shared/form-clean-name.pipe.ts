import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanName'
})
export class FormCleanNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let newValue: string = value;

    newValue = newValue.replace("_","");

    return newValue;

  }

}
