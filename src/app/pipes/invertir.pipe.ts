import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertir'
})
export class InvertirPipe implements PipeTransform {

  transform(value) {
    return value.slice().reverse();
  }

}
