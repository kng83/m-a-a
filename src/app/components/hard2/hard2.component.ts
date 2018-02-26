import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Hard2} from '../../interfaces/hard2-interface';
import {Hard2Service} from './../../services/hard2.service';
import {HardModule} from './../../modules/hard.module';

@Component({
  selector: 'app-hard2',
  templateUrl: './hard2.component.html',
  styleUrls: ['./hard2.component.scss']
})
export class Hard2Component implements OnInit {


 // fnames :string[]= ['hardwareName', 'hardwarePrice'];
 hards: HardModule[];
 pattern=new HardModule();
 fnames = Object.keys(this.pattern.hard);
 // utworz obiekt wsadoowy do FormGroup
 hardItems: any= this.getItemsPattern(this.pattern);
 hardForm:FormGroup = new FormGroup(this.hardItems);

 constructor(private hardService:Hard2Service) {
  //  this.hardItems = 
  }

 ngOnInit() {
  // console.log(this.fnames);
  // pobierz tablice z danymi 
  this.hards = this.hardService.getHardware();
  this.hardService.newItem.subscribe((value) => {
  this.hards = value;
  console.log(this.hards);
  });

 }
 onItemAdd(){
     this.hardService.addHardware(this.hardForm.value);

   //console.log( this.hardForm.value);
 }
 // Pobranie ksztaltu formularza 
 getItemsPattern(pattern :HardModule){
  
   let obj =new Object();
   for(let name of this.fnames){
    console.log(this.pattern.hard[name]['validator']);
     obj[name]=new FormControl(null,this.pattern.hard[name]['validator']);
  //  console.log(obj);
   }
   return obj;

 }

}
