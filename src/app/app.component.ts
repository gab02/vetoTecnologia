import { HomeComponent } from './home/home.component';
import { routes } from './app-routing.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vetoInteligence';
  selectedValues: string[] = ['val1','val2'];
items = [];
activeItem;
value: number = 0;

  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home',routerLink: ['/home'], expanded: true, style: "'widht': '10px;'"},
        {label: 'Contato', icon: 'pi pi-fw pi-phone', routerLink: ['/contato'], expanded: true},
        {label: 'M.V.V', icon: 'pi pi-fw pi-check', routerLink: ['/home'], expanded: true},
        {label: 'Licenças', icon: 'pi pi-fw pi-file', routerLink: ['/home'], expanded: true},
        {label: 'ALEATÓRIO', icon: 'pi pi-fw pi-cog', routerLink: ['/home'], expanded: true},


    ];
    this.activeItem = this.items[0];

  }
}
