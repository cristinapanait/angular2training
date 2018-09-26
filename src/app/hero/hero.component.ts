import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../model/myCustomValidator';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  @ViewChild('heroForm') heroForm: NgForm;

  sub: Subscription;
  id: number;
  hero = {age: 18, name: 'Dr. WhatIsHisWayTooLongName', power: 'Really Smart', what: 'Dr. What'};
  form;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    // this.id = this.route.snapshot.params.id; // DO NOT USE
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });

    // this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.form = this.fb.group({
      name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]], // '' is the default
      power: ['', Validators.minLength(3)],
      gender: ['', Validators.pattern('[A-Za-z]')]
    });
  }

  onValueChanged(data) {
  }

  gotoHero(i: number) {
    this.router.navigate(['hero', i]);
  }

  submitMe() {
    console.log(this.form);
  }
  onSubmit() {
    // this.heroService.saveHero(this.hero).subscribe(res => this.router.navigateByUrl('/'));
  }

}
