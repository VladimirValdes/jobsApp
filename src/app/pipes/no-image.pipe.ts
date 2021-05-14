import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform( poster: string): string {

    if ( poster) {
      return poster;
    }
    return './assets/images/no-image.jpg';
  }

}
