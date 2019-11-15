import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOrdersPage } from './latest-orders.page';

describe('LatestOrdersPage', () => {
  let component: LatestOrdersPage;
  let fixture: ComponentFixture<LatestOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestOrdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
