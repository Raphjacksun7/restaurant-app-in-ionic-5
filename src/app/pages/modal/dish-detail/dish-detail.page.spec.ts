import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailPage } from './dish-detail.page';

describe('DishDetailPage', () => {
  let component: DishDetailPage;
  let fixture: ComponentFixture<DishDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
