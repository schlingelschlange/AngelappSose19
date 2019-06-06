import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPagePage } from './not-found-page.page';

describe('NotFoundPagePage', () => {
  let component: NotFoundPagePage;
  let fixture: ComponentFixture<NotFoundPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
