import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0) return value
    let resultArr = []
    for (let item of value) {
      if (item.status === filterString) resultArr.push(item)
    }
    return resultArr
  }

}
