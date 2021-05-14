import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'

  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class RountingModule { }
