import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'search-bar-layout-2',
  templateUrl: 'search-bar.html'
})

export class SearchBarLayout2 {
  @Input() data: any;
  @Input() events: any;

  searchTerm: any = "";
  allItems: any;

  constructor() { }

  
}
