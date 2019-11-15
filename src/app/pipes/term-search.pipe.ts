import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termSearch',
  pure: false
})

export class TermSearchPipe implements PipeTransform {

  constructor() {}

  transform(value: any, query: any, field: any = ''): any {
    if (value) {
      return query ? value.reduce((prev, next) => {
        if (next[field].includes(query)) { prev.push(next); }
        return prev;
      }, []) : value;
    }
  }

}
