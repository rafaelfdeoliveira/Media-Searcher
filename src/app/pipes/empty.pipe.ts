import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty',
  standalone: true
})
export class EmptyPipe implements PipeTransform {

  transform(
    value: string | null | undefined,
    blankOutput: string = "-",
    blankOptions: string[] = ['N/A']
  ): string {
    if (!value || blankOptions.includes(value)) {
      return blankOutput;
    }

    return value;
  }

}
