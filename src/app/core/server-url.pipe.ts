import { environment } from './../../environments/environment.prod';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverUrl'
})
export class ServerUrlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return environment.url + '/' + value;
  }

}
