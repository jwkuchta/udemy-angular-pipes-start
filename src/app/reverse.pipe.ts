import { Pipe, PipeTransform } from '@angular/core';
import { SafePropertyRead } from '@angular/compiler';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // transform(value: any): any {
  //   let sorted = []
  //   let stringified = value.split('')
  //   console.log('stringified', stringified)
  //   for (let i = stringified.length; i > 0; i--) {
  //     sorted.push(stringified.pop())
  //   }
  //   return sorted.join('')
  // }

  transform(value: any): any {
    return value.split('').reverse().join('')
  }

}
