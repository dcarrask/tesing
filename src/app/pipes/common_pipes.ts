import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Parent } from '../parent';

@Pipe({ name: 'parentsFilter' })

export class ParentsFilterPipe implements PipeTransform {
  transform(items: Parent[], filter: string): Parent[] {
    if (filter){
      return items.filter(item => item.code.indexOf(filter) !== -1);
    } else {
      return items;
    }
  }
}
