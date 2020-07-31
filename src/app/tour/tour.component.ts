import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  paint: string;

  constructor() {
    this.paint = 'Exciting tours for adventurous people';
   }

  ngOnInit(): void {
  }

}
