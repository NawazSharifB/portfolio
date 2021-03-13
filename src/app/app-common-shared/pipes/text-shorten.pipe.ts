import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorten'
})
export class TextShortenPipe implements PipeTransform {

  default = 20;

  transform(value: string, limit: number): string {

    if (value) {
      limit = limit || this.default;

      if (value.length > (limit + 4)) {
        return value.split('').slice(0, limit).join('') + ' ...';
      } else {
        return value;
      }
    }
    return null;
  }

}
