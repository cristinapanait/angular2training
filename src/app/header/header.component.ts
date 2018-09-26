import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  simpleString: string = 'lala';
  simpleNumber: number = 7;
  y: string;
  toggle: boolean = false;
  myVar: string = 'a';
  cities: Array<string> = ['Singapore', 'Ubin', 'Terranganu', 'Kuala Lumpur'];
  city: string;

  constructor() {
  }

  ngOnInit() {
    // this.simpleString = this.getString();
    // console.log(this.simpleString);
    // this.simpleNumber = +this.getString();
    // console.log(this.simpleNumber);

    this.y = this.hello({id: 7, name: 'a', email: 's'});
    console.log(this.y);
  }

  public testMe() {
    this.toggle = !this.toggle;
    console.log('Button works!');
    console.log(this.toggle);
    this.cities.push(this.city);
    this.city = '';
  }

  public addValue(lala:string) {
    this.cities.push(lala);
  }

  hello(user: User): string {
    console.log(user);
    return '7';
  }

  private getString(): string {
    return '7';
  }
}
