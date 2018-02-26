import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service'

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  firstName:string;
  lastName:string;

  constructor(private globaldataService:GlobalDataService) {
    this.peakMe();
    
  }

  ngOnInit() {
   
  }
  peakMe(){
    this.firstName=this.globaldataService.map.get('firstName');
    this.lastName=this.globaldataService.map.get('lastName');
  }

}
