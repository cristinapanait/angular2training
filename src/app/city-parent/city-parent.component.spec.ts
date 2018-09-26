import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityParentComponent } from './city-parent.component';

describe('CityParentComponent', () => {
  let component: CityParentComponent;
  let fixture: ComponentFixture<CityParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
