import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../services/local.service';
import {FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  signupForm: FormGroup;
  genderData:GData[]=[];
  timeInterval:any;
  constructor(private localService: LocalService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'age': new FormControl(null),
      'type': new FormControl(null)
    })
  }



  getData(){
   this.timeInterval= setInterval(()=>{
    this.localService.getData().subscribe((value:any) => {
        this.genderData = JSON.parse(value['_body']);
        console.log(this.genderData);
 
     });
    },1000)
 
  }
  endData(){
    clearInterval(this.timeInterval);

  }

  onSubmitPut(){
 //  console.log(this.signupForm.value);
   this.localService.putData(this.signupForm.value);
  }
  onSubmitPost(){
    this.localService.postData(this.signupForm.value);
  }

}
interface GData{
  description:string;
  value:string;

}
