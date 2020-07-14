import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanname'
})
export class FormCleanNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let newValue: string = value;

    if (newValue[0] === "_")
      newValue = newValue.substring(1);
    newValue = newValue.replace("_", " ");
    let index: number = 0;
    do {
     index++;
        if (newValue[index] === newValue[index].toUpperCase()) {
          newValue = newValue.substring(0,index) + " " + newValue.substring(index);
          index++
        }
      console.log(index);
    } while (index < newValue.length - 1);

    return newValue;
  }

}
