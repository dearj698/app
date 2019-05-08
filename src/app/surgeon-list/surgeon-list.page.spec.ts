import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeonListPage } from './surgeon-list.page';

describe('SurgeonListPage', () => {
  let component: SurgeonListPage;
  let fixture: ComponentFixture<SurgeonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeonListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
