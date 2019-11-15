import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdressPage } from './myadress.page';

describe('EditProfilePage', () => {
  let component: MyAdressPage;
  let fixture: ComponentFixture<MyAdressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
