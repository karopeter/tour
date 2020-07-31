import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['About Natours', 'Your benefits', 'Popular tours', 'Stories', 'Book now'];
   }

  ngOnInit(): void {
  }

}
