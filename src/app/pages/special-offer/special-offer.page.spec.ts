import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffertPage } from './special-offer.page';

describe('SpecialOffertPage', () => {
  let component: SpecialOffertPage;
  let fixture: ComponentFixture<SpecialOffertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOffertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOffertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
