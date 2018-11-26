import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmenuPage } from './popupmenu.page';

describe('PopupmenuPage', () => {
  let component: PopupmenuPage;
  let fixture: ComponentFixture<PopupmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
