import { Component, OnInit } from '@angular/core';
import { ThisNameInsideComponent } from '../../modules/cat-module';
import { MyFirst } from '../../interfaces/my-first';
import { Input, Output } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  //  template: `<h1>moje imie to {{name}}</h1>`,
  styleUrls: ['./my-form.component.scss']
})



export class MyFormComponent implements OnInit, MyFirst {

  imageUrl = 'http://lorempixel.com/400/200';
  myFirst = <MyFirst>{};
  itsHidden: boolean;


  constructor(private dataService: GlobalDataService) {

    this.myFirst.age = 34;
    this.myFirst.firstName = this.dataService.map.get('firstName') || 'bobo';
    this.myFirst.lastName = this.dataService.map.get('lastName')||'kot';
    this.itsHidden = true;

  }

  whatDo(mruk: string) {
    return mruk;
  }
  showMe() {
    this.itsHidden = !this.itsHidden;

  }
  changeFirstName() {
   this.dataService.map.set('firstName',this.myFirst.firstName);
  }
  changeLastName() {
    this.dataService.map.set('lastName',this.myFirst.lastName )
    
  }

  ngOnInit() {
    console.log(this.dataService.map.get('kot'));
  }
}





