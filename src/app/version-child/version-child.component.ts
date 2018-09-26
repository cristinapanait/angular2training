import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major: number;
  @Input() minor: number;

  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey:string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);
      log.push(`${propName} changed from ${from} to ${to}`);
    }
    this.changeLog.push(log.join(','));
  }
}
