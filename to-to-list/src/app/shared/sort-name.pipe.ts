import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../model/task";

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): any {
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
      } else {
        return -1;
      }
    });
  }

}
