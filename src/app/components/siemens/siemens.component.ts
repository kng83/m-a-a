import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-siemens',
  templateUrl: './siemens.component.html',
  styleUrls: ['./siemens.component.scss']
})
export class SiemensComponent implements OnInit {
  timeInterval: any;
  secondTimeInterval: any;
  myArray: number[];
  valueToSend = 0;
  incomingValue;
  otherValue: number[];

  constructor(private localService: LocalService) { }

  ngOnInit() {
    //  this.getData();
    this.localService.getSiemensData().subscribe((value) => {

      this.otherValue = JSON.parse(value['_body']);
      console.log(value);
      this.valueToSend = this.otherValue[3];

    });
  }
  getOnlineValue() {

  }

  getData() {
    this.timeInterval = setInterval(() => {
      this.localService.getSiemensData().subscribe((value: any) => {
        this.myArray = JSON.parse(value['_body']);
        console.log(this.myArray);

      });
    }, 10000);

  }

  postSiemensData(data: any) {

    this.localService.postSiemensData({ 'value': data }).then((value) => {
      this.valueToSend = JSON.parse(value['_body'])['value'];
      console.log(value, 'ok');
    });


    //  console.log(data);
  }

  onMousePressUp() {
    this.valueToSend++;
    // console.log(this.valueToSend);
    const  me = this.postSiemensData(this.valueToSend.toString());


  }
  onMousePressDown() {
    this.valueToSend--;
    this.postSiemensData(this.valueToSend.toString());

  }

}
