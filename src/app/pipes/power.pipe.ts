import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: true
})
export class PowerPipe implements PipeTransform {

  transform(val:number,pow:number=2): unknown {
    return Math.pow(val,pow);
  }

}
