import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLocationPage } from './home-location.page';

describe('HomeLocationPage', () => {
  let component: HomeLocationPage;
  let fixture: ComponentFixture<HomeLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
