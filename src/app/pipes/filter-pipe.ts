import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parentsFilter'
})

export class ParentsFilterPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    debugger
    console.log('value: ' + value);
    console.log('args: ' + args);

    //var vamos = /^12/;
    //var results = R.filter(R.where({code: R.test(vamos)}))(data);

    let filter;

    if (args[0]){
      filter = args[0].toLocaleLowerCase();
      // return filter ? value.filter(parents=> parents.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
      return filter ? value.filter(parents=> parents.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
    } else {
      // return filter ? value.filter(parents=> parents.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
      return filter;
    }
  }
}
