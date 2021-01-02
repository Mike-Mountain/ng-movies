import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setImageSrc'
})
export class SetImageSrcPipe implements PipeTransform {

  transform(baseUrl: string | undefined, size?: string | undefined, imageUrl?: string| undefined): unknown {
    return `${baseUrl}${size}${imageUrl}`;
  }

}
