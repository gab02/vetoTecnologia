import { ContatoComponent } from './contato.component';

import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const ContatoRoutes: Routes = [
  {
      path: 'contato',
      component: ContatoComponent,
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
    RouterModule.forChild(ContatoRoutes)
  ]
})
export class ContatoRoutingModule { }
