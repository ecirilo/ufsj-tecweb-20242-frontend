import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

@Pipe({
  name: 'formatMediumDate',
})
export class FormatMediumDatePipe implements PipeTransform {
  transform(day: dayjs.Dayjs | null | undefined): string {
    if (!day) {
      return '';
    }

    dayjs.extend(utc);
    dayjs.extend(timezone);

    day = dayjs(day).tz('America/Sao_Paulo', true);
    day = dayjs(day, 'YYYY-MM-DD');
    return day.format('D MMM YYYY - HH:mm');
  }
}
