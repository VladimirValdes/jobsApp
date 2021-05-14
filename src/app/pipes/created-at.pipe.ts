import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform {

  dateNow = new Date();
  dateLast: Date;
  days: number;
  hours: number;
  daysMoth = [28, 29, 30, 31];
  months: number;
  date: string;



  transform(createAt: string ): string {

    this.dateLast = new Date(createAt);

    this.days = this.daysDiff( this.dateLast, this.dateNow );


    // tslint:disable-next-line: curly
    if ( Math.trunc(this.days) <= 0  ) {

        this.hours = this.hoursDiff(this.dateLast, this.dateNow );
        this.hours = Math.floor( this.hours );

        if (Math.trunc(this.hours) === 0 ) {
          console.log('Entre');
          this.date = 'New';
        } else {

        this.date = this.hours.toString() +  ' h ago';
        }


    } else if ( Math.trunc(this.days) >= 28 ) {

        this.daysMoth.forEach( day => {

          const date = this.haveMonth(this.dateLast, day);
          

          if ( date.getDate() === this.dateLast.getDate()) {

            const months = this.monthDiff(createAt, this.dateNow);
            this.date = months.toString() +  ' m ago';

          }
        });
    } else  {

        this.days = Math.round(this.days);
        this.date = this.days.toString() +  ' d ago';

    }
    return this.date;
  }


  monthDiff(d1: string, d2: Date): number {

      const date1 = new Date(d1);
      this.months = (d2.getFullYear() - date1.getFullYear()) * 12;
      this.months -= date1.getMonth();
      this.months += d2.getMonth();

      return this.months;
  }

  daysDiff(d1: Date, d2: Date ): number {

    const diffTime = d2.getTime() - d1.getTime();
    const days = diffTime / ( 1000 * 3600 * 24 );

    return days;

  }

  hoursDiff(d1: Date, d2: Date ): number {

    const diffTime = d2.getTime() - d1.getTime();
    const hours = diffTime / ( 1000 * 3600 );

    return hours;
  }

  haveMonth(dlast: Date , day: number ): Date {
    const sameDate = dlast.setTime( dlast.getTime() + ( day + 86400000));

    return new Date(sameDate);
  }

}
