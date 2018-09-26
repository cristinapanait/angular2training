import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-parent',
  template: '<app-city-child *ngFor="let city of cities" [city]="city"></app-city-child>',
  styleUrls: ['./city-parent.component.css']
})
export class CityParentComponent implements OnInit {

  cities = [{name: "Kuala Lumpur", country: "Malaesia"},
    {name: "Singapore", country: "Singapore"},
    {name: "Ho Chi Minh", country: "Vietnam"}];

  constructor() {
  }

  ngOnInit() {
  }

}
