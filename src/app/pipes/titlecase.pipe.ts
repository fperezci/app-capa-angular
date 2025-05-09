import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  /**
   * Takes a string and capitalizes the first letter of each word.
   * @example
   * {{ 'hello world' | titlecase }}
   * // Output: Hello World
   */
  transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  }

}
