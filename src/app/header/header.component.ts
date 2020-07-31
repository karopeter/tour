import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
   primary: string;
   description: string;
   discovery: string;

  constructor() {
    this.primary = 'outdoors';
    this.description = 'is where life happens';
    this.discovery = 'Discover our tours';
  }
}
