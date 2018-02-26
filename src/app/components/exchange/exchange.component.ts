import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  val: any;
  dataArray: SmallData[] =[];
  constructor(private serverService: ServerService) { }

  ngOnInit() {
  this.serverService.getData().subscribe((value) => {
    this.dataArray = value;
    console.log(value)
  });

  this.serverService.coutning().subscribe((value) => console.log(value));

 
  }
  onSubmit(data){
    this.serverService.pushData(data).subscribe((value)=>{
      this.val = value.json();
      for(let data in this.val){
        this.dataArray.push(this.val[data]);
      }

    })
    
  }
}
interface SmallData{
  name:string;
  age:number;
}
