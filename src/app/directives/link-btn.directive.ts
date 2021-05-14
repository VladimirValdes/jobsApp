import { Directive, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appLinkBtn]'
})
export class LinkBtnDirective {

  @Output() active: EventEmitter<boolean> = new EventEmitter();
  @Input() linkApp: string; 

  constructor() {
    console.log(`👀 Desde directive link -> ${ this.linkApp } `);
   }

}
