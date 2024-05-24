import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(objeto:any): number {
    return (objeto.note1 + objeto.nota2)/2;
  }

}
