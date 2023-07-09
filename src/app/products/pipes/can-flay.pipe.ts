import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'canFlay'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'vola' | 'no vola' {

      return value ? 'vola' : 'no vola'

  }

}
