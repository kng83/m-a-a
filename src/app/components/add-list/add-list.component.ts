import { Component, OnInit } from '@angular/core';
import {elementData} from './../../interfaces/elementData';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  itemName:string;
  itemValue:number;
  //elementData:elementData={name:'',value:0};
  daneElementu:elementData[]=[{name:'kot',value:9}];
  constructor() { }

  ngOnInit() {
  }
  addElement(){
    
    if(this.itemName === undefined){
      return
    }if( this.itemValue<0){
     return
    }else{
     
        this.daneElementu.unshift({name:this.itemName,value:this.itemValue});
         
    }
   

  //  console.log(this.itemName,this.itemValue);
  }
  takeIndex(event){
    this.daneElementu.splice(event,1);
    console.log(event);
  }
  superPress(){
    console.log('start');
  }

}

