import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( id: number ): any {
    const url = URL_SERVICIOS + '/login/image?id=' + id;
    return url;
  }

}
