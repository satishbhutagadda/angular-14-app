import { Pipe, PipeTransform } from '@angular/core';
import { UserInfo } from 'src/app/test/test-parent/test-parent.component';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: UserInfo, ...args: unknown[]): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}
