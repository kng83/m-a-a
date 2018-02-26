import { Injectable, OnInit , EventEmitter} from '@angular/core';
import {Hard2,Hard} from '../interfaces/hardware-interface';

@Injectable()
export class HardwareService implements OnInit{

  newItem:EventEmitter<Hard[]> = new EventEmitter();

  hardware : Hard[]=[ 
  ];

  hardware2: Hard2[] =[];

  constructor() {
    console.log('Laduje konstruktor service hardware');
  
  }


  ngOnInit(){
      console.log('Laduje service hardware');
  }

  getHardware(){
   return this.hardware.slice();
  }
  addHardware(obj:Hard){
    this.hardware.push(obj);
    console.log('service',obj);
    this.newItem.emit(this.hardware.slice());
  }
}
