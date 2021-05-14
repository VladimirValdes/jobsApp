import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseModalDirective } from './close-modal.directive';
import { ChangeColorDirective } from './change-color.directive';
import { LinkBtnDirective } from './link-btn.directive';



@NgModule({
  declarations: [
    CloseModalDirective,
    ChangeColorDirective,
    LinkBtnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloseModalDirective,
    ChangeColorDirective,
    LinkBtnDirective
  ]
})
export class DirectivesModule { }
