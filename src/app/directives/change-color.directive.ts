import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  formatHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  color = '#';
  @Output() sendColor: EventEmitter<any> = new EventEmitter();

  constructor( private el: ElementRef) {

    for (let i = 0; i < 6; i++) {
      this.color += this.formatHex[Math.floor( Math.random() * 16 )];
    }

    this.el.nativeElement.style.backgroundColor = this.color;

   }






}
