import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Parent } from '../parent';

@Pipe({
    name: 'myfilter'
})

@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items: Parent[], args: any[]): Parent[] {
    debugger
    if (null === args[0]){
      return items;
    } else {
      return items.filter(item => item.code.indexOf(args[0]) !== -1);
    }
  }
}
