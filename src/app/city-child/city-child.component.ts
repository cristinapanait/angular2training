import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-child',
  templateUrl: './city-child.component.html',
  styleUrls: ['./city-child.component.css']
})
export class CityChildComponent implements OnInit {

  @Input() city: any;

  constructor() { }

  ngOnInit() {
  }

}
