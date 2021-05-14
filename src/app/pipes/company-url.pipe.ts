import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyUrl'
})
export class CompanyUrlPipe implements PipeTransform {

  transform( url: string ): string {

    console.log(url);
    if ( url == null || url.length <= 5 ) {
      return '';
    } 
    return url;
  }

}
