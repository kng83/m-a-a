import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-button',
  templateUrl: './super-button.component.html',
  styleUrls: ['./super-button.component.scss']
})
export class SuperButtonComponent implements OnInit {
  textField:string;
  constructor() { }

  ngOnInit() {
  }

}
