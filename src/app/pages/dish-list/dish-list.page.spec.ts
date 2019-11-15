import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishListPage } from './dish-list.page';

describe('DishListPage', () => {
  let component: DishListPage;
  let fixture: ComponentFixture<DishListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
