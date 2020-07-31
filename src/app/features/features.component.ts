import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  light: string;
  nature: string;
  memory: string;
  bright: string;
  header: string;
  names: string[];
  times: string[];
  waters: string[];
  discover: string;
  wind: string;

  constructor() {
    this.light = 'Explore the world';
    this.nature = 'Meet nature';
    this.memory = 'Find your way';
    this.bright = 'Live a healthier life';
    this.header = 'Most popular tours';
    this.names = ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'];
    this.times = ['7 day tours', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'];
    this.waters = ['5 day tours', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'];
    this.discover = 'Discover all tours';
    this.wind = 'We make people genuinely happy';
  }

  ngOnInit(): void {
  }

}
