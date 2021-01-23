
import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  {
      path: 'home',
      component: HomeComponent,
      children: [
          {
              path: '',
              component: AppComponent
          }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeRoutingModule { }
