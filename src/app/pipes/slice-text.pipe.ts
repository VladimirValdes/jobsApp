import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform( text: string ): string {

    if ( text.length > 25 ) {
      text = text.slice( 0, 25 ) + '...';
    }
    return text;
  }

}
