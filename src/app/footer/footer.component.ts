import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   names: string[];

  constructor() {
    this.names = ['Company', 'Contact us', 'Carrers', 'Privacy policy', 'Terms'];
  }

  ngOnInit(): void {
  }

}
