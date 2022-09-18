import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yobCalculate'
})
export class YobCalculatePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number | null {
    const year = new Date().getFullYear();
    console.log(year);
    return value ? year - value : null;
  }
}
