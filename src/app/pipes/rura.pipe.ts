import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plncurrency'
})
export class RuraPipe implements PipeTransform {

  transform(value: string, space:boolean): string {
    if(space){
      return (" " + value + " zł.")
    }else{
      return (value +  " zł.")
    }

  }

}
