import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardlistPage } from './boardlist.page';

describe('BoardlistPage', () => {
  let component: BoardlistPage;
  let fixture: ComponentFixture<BoardlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
