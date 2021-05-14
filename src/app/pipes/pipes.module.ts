import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedAtPipe } from './created-at.pipe';
import { SliceTextPipe } from './slice-text.pipe';
import { NoImagePipe } from './no-image.pipe';
import { CompanyUrlPipe } from './company-url.pipe';



@NgModule({
  declarations: [
    CreatedAtPipe,
    SliceTextPipe,
    NoImagePipe,
    CompanyUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreatedAtPipe,
    SliceTextPipe,
    NoImagePipe,
    CompanyUrlPipe

  ]
})
export class PipesModule { }
