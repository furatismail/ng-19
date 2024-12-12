import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
})
export class IconPipe implements PipeTransform {

  transform(value: unknown): string {
    switch (value) {
      case true:
        return 'check'
      case false:
        return 'close'
      default:
        return 'close'
    }
  }

}
