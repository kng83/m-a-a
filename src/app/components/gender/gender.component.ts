import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {


  
  constructor(public httpClient: HttpClient) { 
// ('https://jsonplaceholder.typicode.com/posts')
// 'http://172.27.22.203/start.html'
  }
  ngOnInit() {
       this.httpClient.get('http://172.27.22.203/dane.html')
              .subscribe(res =>{
               
                console.log(res);
              
              });
      
}
}
