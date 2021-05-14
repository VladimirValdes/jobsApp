import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { JobsGridComponent } from './jobs-grid/jobs-grid.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';

import { PipesModule } from '../pipes/pipes.module';

import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    JobsGridComponent,
    LoadingComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    JobsGridComponent,
    ModalComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
