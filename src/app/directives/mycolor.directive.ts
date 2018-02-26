import { Directive, Input, ElementRef, Renderer2, HostListener,OnInit } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective implements OnInit{
  // @Input('appMycolor') appMycolor: Custom = {

  //   bgColor: 'red',
  //   color:'white',
  //   defaultBgColor:'white',
  //   defaultColor:'black',

  //}; 
  //@Input('appMycolor') set appMycolor(value:{[key:string]:string})
  custom: Custom = {
    bgColor: 'red',
    color: 'white',
    defaultBgColor: 'white',
    defaultColor: 'black',
  };

  @Input('appMycolor') set appMycolor(value:Custom) {
  
    let [...para] = Object.keys(value);
    for (let p of para) {
      this.custom[p] = value[p];
    }
    
  }



  constructor(private renderer: Renderer2, private el: ElementRef) { }
  
  ngOnInit(){

    
  }


  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.custom.bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.custom.color);

  }
  @HostListener('mouseout') mouseoff() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.custom.defaultBgColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.custom.defaultColor);
  }
}
interface Custom {
  bgColor?: string;
  color?: string;
  defaultBgColor?: string;
  defaultColor?: string;
}
// interfejs do obiektu gdzie nazwa wlasciwosci typu string (key) i wartosc przypisywana tez typu string 
interface Skey{
  [key:string]:string;
}
