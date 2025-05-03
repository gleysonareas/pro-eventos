import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from "../utils/constants";

@Pipe({
  name: 'DateTimeFormat'
})
export class DatetimeFormatPipe extends DatePipe implements PipeTransform {

  public transform(value: any, ...args: any[]): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }

}
