import { Injectable,EventEmitter } from '@angular/core';
import {Hard2} from '../interfaces/hard2-interface';
import {HardModule} from '../modules/hard.module';

@Injectable()
export class Hard2Service {

  newItem:EventEmitter<HardModule[]> = new EventEmitter();
   
    hards: HardModule[] =[];
  
    constructor() {
      console.log('Laduje konstruktor service hardware');
       }
  
  
    ngOnInit(){
        console.log('Laduje service hardware');
    }
  
    getHardware(){
     return this.hards.slice();
    }
    addHardware(obj:HardModule){
      this.hards.push(obj);
    //  console.log('service',obj);
      this.newItem.emit(this.hards.slice());
    }
  }
