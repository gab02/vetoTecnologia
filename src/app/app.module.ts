import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ProgressBarModule} from 'primeng/progressbar';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import { ContatoComponent } from './contato/contato.component';
import { ContatoModule } from './contato/contato.module';
import { ContatoRoutingModule } from './contato/contato-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    AppRoutingModule,
    TabMenuModule,
    CheckboxModule,
    MessageModule,
  	ProgressBarModule,
    HomeRoutingModule,
    HomeModule,
    AccordionModule,
  ScrollTopModule,
  MenubarModule,
  CardModule,
  ContatoModule,
  ContatoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class AppModule { }

