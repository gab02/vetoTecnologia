import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ContatoRoutingModule } from './contato-routing.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';

import {AccordionModule} from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    TabMenuModule,
    CheckboxModule,
    MessageModule,
  	ProgressBarModule,
     AccordionModule,
    ScrollTopModule,
AccordionModule,
  ButtonModule,
  ToastModule,
  CardModule,
  ],
  providers:[
    ContatoRoutingModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class ContatoModule { }
