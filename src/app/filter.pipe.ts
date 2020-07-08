import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pipe gets recalculated every time the data changes which may lead to performance issues
  // forces update on each data change
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') return value
    let resultArr = []
    for (let item of value) {
      if (item.status === filterString) resultArr.push(item)
    }
    return resultArr
  }

}
