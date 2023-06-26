import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString'
})
export class ShortStringPipe implements PipeTransform {

  transform(str: string): any {
    let newStr = str.substring(0, 40);

    if (str.length > 40) {
      newStr = '...' + newStr;
    }
    return newStr;
  }

}
