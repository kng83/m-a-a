import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {elementData} from './../../../interfaces/elementData';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() elemData:elementData;
  @Input('fieldIndex') index:number;
  @Output() indexNumber:EventEmitter<any>;
 
  bgColor={
    background:'white'
  }
  imageUrl = 'http://lorempixel.com/400/200';
  
  constructor() { 
    this.indexNumber=new EventEmitter();
  }


  ngOnInit() {
    let myColor:string;
    let myC:string[]=['0'];
    for(let i=0;i<6;i++){
      myC[i]=Math.floor((Math.random() * 13+2)).toString(16).toUpperCase();
    }
    myColor= myC.join('').toString();
    myColor= `#${myColor}`;
    
    console.log(myColor);
    this.bgColor.background=myColor ;
  }
  deleteCard(){
    this.indexNumber.emit(this.index);

    console.log(this.indexNumber);
  }

}
