import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { Hard } from '../../interfaces/hardware-interface';
import {HardwareService} from '../../services/hardware.service';
import {FormGroup,FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-rury',
  templateUrl: './rury.component.html',
  styleUrls: ['./rury.component.scss']
})
export class RuryComponent implements OnInit {
 
 // fnames :string[]= ['hardwareName', 'hardwarePrice'];
  hardware: Hard[];
  pattern: Hard ={
    hardwareName:'',
    hardwarePrice:0,
    hardwarePlace:1123
  };
  fnames = Object.keys(this.pattern);

  hardItems: any= {
    hardwareName: new FormControl(null),
    hardwarePrice: new FormControl(null),
    hardwarePlace: new FormControl(null)
  };

 
  hardForm:FormGroup = new FormGroup(this.hardItems);
 
  constructor(private hardService:HardwareService) { }

  ngOnInit() {

   this.hardware = this.hardService.getHardware();
   this.hardService.newItem.subscribe((value) => {
   this.hardware = value;
   });
   console.log(this.fnames);
  }
  onItemAdd(){
      this.hardService.addHardware(this.hardForm.value);
 
    console.log( this.hardForm.value);
  }

}
