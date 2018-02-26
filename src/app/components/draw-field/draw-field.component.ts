import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {shoplist} from '../../models/shoplist';
// import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-draw-field',
  templateUrl: './draw-field.component.html',
  styleUrls: ['./draw-field.component.scss']
})
export class DrawFieldComponent implements OnInit {
   home:string;
  itemList:shoplist[];
  constructor(public httpClient: HttpClient) { 

  }
  ngOnInit() {
       this.httpClient.get('../../../assets/files/people.json')
              .subscribe(res =>{
                this.itemList=res['wynik'];
                console.log(this.itemList);
              //  console.log(this.itemList[0].name);
              });
  }

}
