import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

  transform(value: Date | moment.Moment, end: Date | moment.Moment): number {
  	const endValue = moment(end);
  	const startValue = moment(value);
    return startValue.diff(endValue, 'year');
  }

}
