import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcasePage } from './bookcase.page';

describe('BookcasePage', () => {
  let component: BookcasePage;
  let fixture: ComponentFixture<BookcasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
