import { Component, OnInit } from '@angular/core';
import { SquareArea } from '../../modules/shape-module';




@Component({
  selector: 'app-square-page',
  templateUrl: './square-page.component.html',
  styleUrls: ['./square-page.component.scss']
})



export class SquarePageComponent implements OnInit {
  kwadrat: SquareArea;
  kwadratArea: number;
  myValX: number;
  myValY: number;
  myCosTam: number;
  private intervalHelp;

  constructor() {

  }

  ngOnInit() {
    this.myValX = 0;
    this.myValY = 0;
  }
  private showArea() {
    return this.kwadrat.getArea();
  }

  inputEdit() {
    // console.log('yeah');
    this.kwadrat = new SquareArea(this.myValX, this.myValY);
    return this.showArea();
  }
  onMouseOver(val: string, direction: string) {
    this.intervalHelp = setInterval(callback => this.countFunct(val, direction), 300);
  }
  onMouseLeave() {
    clearInterval(this.intervalHelp);
  }
  countFunct(val: string, direction: string): void {
    if (direction === 'pos') {
      if (val === 'myValX') {
        this.myValX += 1;
      } if (val === 'myValY') {
        this.myValY += 1;
      } else { }
    } if (direction === 'neg') {
      if (val === 'myValX') {
        this.myValX -= 1;
      } if (val === 'myValY') {
        this.myValY -= 1;
      } else { }
    }

  }

}
